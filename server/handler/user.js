const { firebase, firestore, admin } = require("../util/firebase");
const config = require("../util/config");
const { reduceUserDetails } = require("../util/validators");

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

  let userId;

  firestore
    .doc(`users/${newUser.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
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
      return firestore.collection('setting').add({current_theme: 0, select_mood: true, username: newUser.username})
    })
    .then(() => {
      return firestore.collection('quests').get()
    })
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        firestore.collection('quest_user').add({
          username: newUser.username,
          questId: doc.id,
          questStatus: 'in_progress',
          questDone: 0,
          questType: doc.data().questType
        })
      })
      return firestore.collection('achievements').get()
    })
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        firestore.collection('achievement_user').add({
          username: newUser.username,
          achievementId: doc.id,
          achievementStatus: 'in_progress',
          achievementDone: 0,
        })
      })
    })
    .then(() => {
      const userCredentials = {
        username: newUser.username,
        email: newUser.email,
        nickname: newUser.nickname,
        createdAt: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Bangkok",
        }),
        last_login: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Bangkok",
        }),
        userImage: `https://firebasestorage.googleapis.com/v0/b/${config.firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
        userId,
        status: "user",
        level: 0,
        exp: 0,
        coin: 0,
        theme: 0,
      };

      firestore.doc(`/users/${newUser.username}`).set(userCredentials);
      return res.json({ data: userCredentials });
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

  let userId
  let username
  let last_login
  let midnight
  let loginQuestId
  //   const { valid, errors } = validateLoginData(user);

  //   if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      userId = data.user.uid
      return firestore.collection('users').where("userId", "==", userId).get()
    })
    .then((snapshot) => {
      midnight = (new Date()).setHours(0, 0, 0, 0)
      snapshot.forEach( async (doc) => {
        last_login = new Date(doc.data().last_login)
        username = doc.id
      })
      return firestore.collection('quests').where('questAction', '==', 'login').get()
    })
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        loginQuestId = doc.id
      })
      return firestore.collection('quest_user').where('username', '==', username).get()
    })
    .then(async (snapshot) => {
      if(snapshot.size > 0 && last_login - midnight <= 0){
        const resetQuestReqPromise = snapshot.forEach((doc) => {
          if((doc.data().questType === 'Daily' && doc.data().questId !== loginQuestId) || (doc.data().questStatus === 'quest_claim' && doc.data().questId !== loginQuestId)) {
            return firestore.doc(`quest_user/${doc.id}`).update({questDone:0, questStatus: 'in_progress'})
          } else if(doc.data().questType === 'Daily' && doc.data().questId === loginQuestId) {
            console.log('yesssss')
            return firestore.doc(`quest_user/${doc.id}`).update({questDone:1, questStatus: 'quest_success'})
          } else {
            return 'not daily'
          }
        })
        
        Promise.all(resetQuestReqPromise)
          .then((data) => {
            return null
          })
          .catch((err) => {
            console.log(err)
            return null
          })
      } else {
        return null
      }
    }) 
    .then(() => {
      return firestore.doc(`users/${username}`).update({last_login: new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})});
    })
    .then(() => {
      return firestore.collection("users").where("userId", "==", userId).get();
    })
    .then((snapshot) => {
      snapshot.forEach(function (doc) {
        return res.json({ data: doc.data() });
      });
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

exports.checkAuthen = async (req, res) => {
  console.log("check");
  const clientUserId = req.body.clientUserId;
  let username = req.user.username

  let userData = {};

  let setting = await firestore
                  .collection("setting")
                  .where("username", "==", username)
                  .get()
                  .then((snapshot) => {
                    let setting_data
                    snapshot.forEach(function (doc) {
                      setting_data = doc.data()
                      setting_data.docId = doc.id
                    });
                    return setting_data
                  })
                  .catch((err) => {
                    console.log(err)
                    return res.json({error: err})
                  })

  let events = await firestore
                .collection("users")
                .where("userId", "==", clientUserId)
                .get()
                .then((snapshot) => {
                  snapshot.forEach(function (doc) {
                    userData = doc.data();
                  });
                  return firestore
                    .collection("events")
                    .where("username", "==", username)
                    .get();
                })
                .then((snapshot) => {
                  let return_events = []
                  snapshot.forEach(function (doc) {
                    let newData = {
                      date: doc.data().date,
                      detail: doc.data().detail,
                      event: doc.data().event,
                      key: doc.data().key,
                      rank: doc.data().rank,
                      start: doc.data().start,
                      end: doc.data().end,
                      catagory: doc.data().catagory,
                      success: doc.data().success,
                      docId: doc.id,
                      privacy: doc.data().privacy,
                      createdAt: doc.data().createdAt
                    };
                    return_events.push(newData);
                  });
                  return return_events
                })
                .catch((err) => {
                  console.log(err)
                  return res.json({error: err})
                })

  let notifications = await firestore
                      .collection("notifications")
                      .where("username", "==", userData.username)
                      .get()
                      .then((snapshot) => {
                        let return_data = []
                        snapshot.forEach(function (doc) {
                          let newData = {
                            createdAt: doc.data().createdAt,
                            read: doc.data().read,
                            toggle: doc.data().toggle,
                            type: doc.data().type,
                            data: doc.data().data,
                            docId: doc.id,
                          };
                          return_data.push(newData);
                        });

                        let sortNotifications = return_data.sort(
                          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                        );

                        return sortNotifications
                      })
                      .catch((err) => {
                        console.log(err)
                        return res.json({error: err})
                      })
  
  return res.json({
    eventData: events,
    notiData: notifications,
    userData: userData,
    settingData : setting
  });
};

exports.signout = (req, res) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false });
    });
};

exports.editProfile = (req, res) => {
  const userData = reduceUserDetails(req.body);

  if (!userData.errors) {
    firestore
      .doc(`/users/${req.user.username}`)
      .update(userData)
      .then(() => {
        return firestore
          .collection("users")
          .where("username", "==", req.user.username)
          .get();
      })
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          return res.json({ data: doc.data() });
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  } else {
    return res.status(500).json({ error: userData.errors });
  }
};

exports.setSelectMood = (req, res) => {
  let docId = req.body.docId
  let set_data = req.body.set_data

  firestore.doc(`/setting/${docId}`).update({select_mood: set_data})
    .then(() => {
      return res.status(200).json({data: set_data})
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
    
}

exports.selectTheme = (req, res) => {
  let docId = req.body.docId
  let set_data = req.body.set_data

  firestore.doc(`/setting/${docId}`).update({current_theme: set_data})
    .then(() => {
      return res.status(200).json({data: set_data})
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
    
}
