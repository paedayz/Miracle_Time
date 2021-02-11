const {firebase, firestore, admin} = require("../util/firebase")
const config = require("../util/config")
const {reduceUserDetails} = require("../util/validators")

exports.signup = (req, res) => {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      nickname: req.body.nickname,
    };

//   const { valid, errors } = validateLoginData(user);

//   if (!valid) return res.status(400).json(errors);
  
    const noImg = "no-img.png";
  
    let token, userId;
  
    firestore.doc(`users/${newUser.username}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("username same");
          return res.status(400).json({
            username: "This username is already taken",
          });
        } else {
          return firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
      })
      .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
      })
      .then((idToken) => {
        token = idToken;
  
        const userCredentials = {
          username: newUser.username,
          email: newUser.email,
          nickname: newUser.nickname,
          createdAt: new Date().toLocaleString("en-US", {
            timeZone: "Asia/Bangkok",
          }),
          userImage: `https://firebasestorage.googleapis.com/v0/b/${config.firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
          userId,
          status: "user",
          level: 0,
          exp: 0,
          coin: 0,
          theme: null
        };
  
        firestore.doc(`/users/${newUser.username}`).set(userCredentials);
        return res.json({data : userCredentials})
      })
      .catch((err) => {
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
          return res.status(400).json({ email: "Email is already in use" });
        } else {
          return res
            .status(500)
            .json({ general: "Something went wrong, please try again" });
        }
      });
  };

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
//   const { valid, errors } = validateLoginData(user);

//   if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.uid;
    })
    .then((uid) => {
      return firestore.collection('users').where('userId', '==', uid).get();
    })
    .then((snapshot) => {
      snapshot.forEach(function(doc){
        return res.json({data : doc.data()}) 
      })
    })
    .catch((err) => {
      console.error(err);
      // auth/wrong-password
      // auth/user-not-user
      return res
        .status(403)
        .json({ general: "Wrong credentials, please try again" });
    });
};

exports.checkAuthen = (req, res) => {
  console.log('check')
  let username
  let userData = {}
  let events = []
  let notifications = []
  let friendRequest = []
  let friendList = []

  let friendListToFetch = []
  let friendRequestToFetch = []

  let friendRequestDocId = []

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      let userId = user.uid
      firestore.collection('users').where('userId', '==', userId).get()
        .then((snapshot) => {
          snapshot.forEach(function(doc){
            userData = doc.data()
          })
          username = userData.username
          return firestore.collection('events').where('username', '==', username).get() 
        })
        .then((snapshot) => {
            snapshot.forEach(function(doc){
                let newData = {
                    date: doc.data().date,
                    detail: doc.data().detail,
                    event: doc.data().event,
                    key: doc.data().key,
                    rank: doc.data().rank,
                    start: doc.data().start,
                    end: doc.data().end,
                    catagory: doc.data().catagory,
                }
                events.push(newData)
            })
            return firestore.collection('friend').where('recipient', '==', username).get()
        })
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            if(doc.data().accept) {
              friendListToFetch.push(doc.data().sender)
            } else {
              friendRequestToFetch.push(doc.data().sender)
              friendRequestDocId.push(doc.id)
            }
          })
          return firestore.collection('friend').where('sender', '==', username).get()
        })
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            if(doc.data().accept) {
              friendListToFetch.push(doc.data().recipient)
            }
          })

          const friendListPromise = friendListToFetch.map((username) => {
            return firestore.doc(`/users/${username}`).get()
          })

          const friendRequestPromis = friendRequestToFetch.map((username) => {
            return firestore.doc(`/users/${username}`).get()
          })


          Promise.all(friendListPromise)
            .then((data) => {
              data.forEach((doc) => {
                friendList.push(doc.data())
              })
            })
            .catch((err) => {
              console.log(err)
              return res.json({error: err})
            })

            Promise.all(friendRequestPromis)
            .then((data) => {
              data.forEach((doc) => {
                friendRequest.push(doc.data())
              })
            })
            .catch((err) => {
              console.log(err)
              return res.json({error: err})
            })

          return firestore.collection('notifications').where('username', '==', userData.username).get() 
        })
        .then((snapshot) => {
            snapshot.forEach(function(doc){
                let newData = {
                  createdAt : doc.data().createdAt,
                  read : doc.data().read,
                  toggle : doc.data().toggle,
                  type : doc.data().type,
                  data : doc.data().data,
                  docId : doc.id
                }
                notifications.push(newData)
            })

            let sortNotifications = notifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

            let friendRequestBuff = []
            let reqNum = 0
            friendRequest.map((request) => {
              request.docId = friendRequestDocId[reqNum]
              friendRequestBuff.push(request)
              reqNum = reqNum + 1
            })

            friendRequest = friendRequestBuff

            const resData = {
              eventData: events, 
              notiData: sortNotifications, 
              userData: userData, 
              friendList: friendList, 
              friendRequest: friendRequest
            }
            return res.json(resData)
        })
        .catch((err) => {
          console.log(err)
          return res.json({error: err})
        })
    } else {
      return res.json({error: 'something went wrong'})
    }
  })
}

exports.signout = (req, res) => {
  firebase.auth().signOut()
    .then(() => {
      return res.json({success: true})
    })
    .catch((err) => {
      console.log(err)
      return res.json({success: false})
    })
}

exports.editProfile = (req, res) => {
  const userData = reduceUserDetails(req.body)
  
  if(!userData.errors) {
    firestore.doc(`/users/${req.user.username}`)
      .update(userData)
      .then(() => {
        return firestore.collection('users').where('username', '==', req.user.username).get() 
      })
      .then((snapshot) => {
        snapshot.forEach(function(doc){
          return res.json({data : doc.data()}) 
        })
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });

  } else {
    return res.status(500).json({ error: userData.errors });
  }
  
}