const {firebase, firestore, admin} = require("../util/firebase")

exports.addQuest = (req, res) => {
    let questId
    let allUsername = []
    const questData = req.body.questData
    firestore.collection('quests').add(questData)
        .then((docRef) => {
            questId = docRef.id
            return firestore.collection('users').get()
        })
        .then( async (snapshot) => {
            snapshot.forEach((doc) => {
                allUsername.push(doc.id)
            })

            const addQuestPromise = allUsername.map((username) => {
                return firestore.collection('quest_user').add({
                    username: username,
                    questId: questId,
                    questStatus: 'in_progress',
                    questDone: 0,
                    questType: req.body.questData.questType
                })
            })

            const resData = await Promise.all(addQuestPromise)
                                .then(() => {
                                    return firestore.doc(`quests/${questId}`).get()
                                })
                                .then((doc) => {
                                    return doc.data()
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

exports.adminGetQuestList = (req, res) => {
    let adminQuestList = []
    firestore.doc(`/users/${req.user.username}`).get()
        .then(doc => {
            if(doc.data().status === "admin") {
                return firestore.collection('quests').get()
            } else {
                return res.status(403).json({error: 'No permission to get data'})
            }
        })
        .then((snapshot) => {
            if(snapshot.size) {
                snapshot.forEach((doc) => {
                    adminQuestList.push(doc.data())
                })
                return res.json({data: adminQuestList})
            }
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}