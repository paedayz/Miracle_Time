const {firebase, firestore, admin} = require("../util/firebase")

exports.addDaily = (req, res) => {
    const dailyData = {
        createdAt : new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok",}),
        username: req.user.username,
        detail: req.body.detail,
        mood: req.body.mood
    }

    firestore.collection('daily').add(dailyData)
        .then((doc) => {
            return firestore.doc(`/daily/${doc.id}`).get()
        })
        .then((doc) => {
            
            return res.json({data : doc.data()})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.getUserDaily = (req, res) => {
    firestore.collection('daily').where('username', '==', req.user.username).get()
        .then((snapshot) => {
            let data = []
            snapshot.forEach((doc) => {
                data.push(doc.data())
            })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}