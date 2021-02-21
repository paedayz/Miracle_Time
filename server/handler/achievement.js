const {firebase, firestore, admin} = require("../util/firebase")

exports.addAchievement = (req, res) => {
    let achievementId
    let allUsername = []
    const achievementData = req.body.achievementData
    firestore.collection('achievements').add(achievementData)
        .then((docRef) => {
            achievementId = docRef.id
            return firestore.collection('users').get()
        })
        .then( async (snapshot) => {
            snapshot.forEach((doc) => {
                allUsername.push(doc.id)
            })

            const addAchievementPromise = allUsername.map((username) => {
                return firestore.collection('achievement_user').add({
                    username: username,
                    achievementId: achievementId,
                    achievementStatus: 'in_progress',
                    achievementDone: 0,
                })
            })

            const resData = await Promise.all(addAchievementPromise)
                                .then(() => {
                                    return firestore.doc(`achievements/${achievementId}`).get()
                                })
                                .then((doc) => {
                                    let buff = doc.data()
                                    buff.docId = doc.id
                                    return buff
                                })
                                .catch((err) => {
                                    console.log(err)
                                    return res.json({error: err})
                                  })
            
            return res.json({data: resData})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}

exports.adminGetAchievementList = (req, res) => {
    let adminAchievementList = []
    firestore.doc(`/users/${req.user.username}`).get()
        .then(doc => {
            if(doc.data().status === "admin") {
                return firestore.collection('achievements').get()
            } else {
                return res.status(403).json({error: 'No permission to get data'})
            }
        })
        .then((snapshot) => {
            if(snapshot.size) {
                snapshot.forEach((doc) => {
                    let buff = doc.data()
                    buff.docId = doc.id
                    adminAchievementList.push(buff)
                })
                return res.json({data: adminAchievementList})
            }
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}

exports.doAchievement = (req, res) => {
    let username = req.user.username
    let achievementAction = req.body.achievementAction
    let mainAchievementData = []
    let resUpdateAchievement = []

    firestore.collection('achievements').where('achievementAction', '==', achievementAction).get()
        .then((snapshot) => {
            if(snapshot.size !== 0) {
                snapshot.forEach((doc) => {
                    mainAchievementData.push({
                        achievementId : doc.id,
                        achievementRequirement: doc.data().achievementRequirement
                    })
                })
                
                return firestore.collection('achievement_user').where('username', '==', username).get()
            } else {
                return res.status(403).json({err: 'That achievement is delete already'})
            }
           
        })
        .then( async (snapshot) => {
            
            if(snapshot.size) {
                snapshot.forEach((doc) => {
                    mainAchievementData.map((data) => {
                        if(doc.data().achievementStatus === 'in_progress' && doc.data().achievementId === data.achievementId) {
                            let newData = {
                                achievementDone: doc.data().achievementDone + 1,
                                achievementId: doc.data().achievementId,
                                achievementStatus: 'in_progress',
                                username: doc.data().username,
                            }
    
                            if(newData.achievementDone === data.achievementRequirement) {
                                newData.achievementStatus = 'achievement_success'
                            }
    
                            firestore.doc(`/achievement_user/${doc.id}`).set(newData)
                            
                            resUpdateAchievement.push(newData)
                        }
                    })
                })
                return res.json({data: resUpdateAchievement})
            }
            
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}

exports.deleteAchievement = (req, res) => {
    const achievementId = req.body.achievementId
    let mainAchievementId
    let docIdToDelete = []
    let batch = firestore.batch()
    let path = firestore.collection('achievement_user')
    firestore.doc(`/achievements/${achievementId}`).get()
        .then((doc) => {
            mainAchievementId = doc.id
            return firestore.doc(`/achievements/${achievementId}`).delete()
        })
        .then(() => {
            return firestore.collection('achievement_user').where('achievementId', '==', achievementId).get()
        })
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                docIdToDelete.push(doc.id)
            })

            docIdToDelete.map((docId) => {
                batch.delete(path.doc(docId))
            })
            batch.commit()
            return res.status(200).json({data: achievementId})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}

exports.editAchievement = (req, res) => {
    const mainAchievementId = req.body.achievementId
    const updateAchievementData = req.body.updateAchievementData
    const resData = updateAchievementData

    firestore.doc(`/achievements/${mainAchievementId}`).update(updateAchievementData)
        .then(() => {
            resData.achievementId = mainAchievementId
            return firestore.doc(`/achievements/${mainAchievementId}`).get()
        })
        .then((doc) => {
            let buff = doc.data()
            buff.docId = doc.id
            return res.json({data: buff})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}

exports.getUserAchievement = (req, res) => {
    let username = req.user.username
    let achievementList = []
    let userAchievement = []

    firestore.collection("achievement_user").where("username", "==", username).get()
        .then(async(snapshot) => {
            snapshot.forEach((doc) => {
                let buff = doc.data()
                buff.docId = doc.id
                userAchievement.push(buff)
            })

            let achievementDataPromise = userAchievement.map((achievement) => {
                return firestore.doc(`/achievements/${achievement.achievementId}`).get()
            })

            Promise.all(achievementDataPromise)
                                .then((data) => {
                                    data.map((doc) => {
                                        achievementList.push(doc.data())
                                    })
                                    let num = 0
                                    userAchievement.map((achievement) => {
                                        achievementList[num].achievementDone = achievement.achievementDone
                                        achievementList[num].achievementStatus = achievement.achievementStatus
                                        achievementList[num].username = achievement.username
                                        achievementList[num].docId = achievement.docId,
                                        achievementList[num].achievementId = achievement.achievementId
                                        num = num+1
                                    })
                                    return res.json({data: achievementList})
                                })
                                .catch((err) => {
                                    return err
                                })
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}
