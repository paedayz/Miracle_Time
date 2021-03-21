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
}