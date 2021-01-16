const {firebase, firestore} = require("../util/firebase")
const config = require("../util/config")

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
  firebase.auth().onAuthStateChanged((user) => {
    
    if(user) {
      let userId = user.uid
      firestore.collection('users').where('userId', '==', userId).get()
        .then((snapshot) => {
          snapshot.forEach(function(doc){
            return res.json({data : doc.data()}) 
        })
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