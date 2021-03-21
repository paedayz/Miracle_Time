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
                let daily_data = doc.data()
                daily_data.docId = doc.id
                data.push(daily_data)
            })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.editDaily = (req, res) => {
    firestore.doc(`/daily/${req.body.docId}`).get()
        .then((doc) => {
            if(doc.data().username !== req.user.username) {
                return res.status(403).json({message : 'Permission denied'})
            } else {
                return firestore.collection('daily').doc(doc.id).update({detail: req.body.detail})
            }
        })
        .then(() => {
            return firestore.doc(`/daily/${req.body.docId}`).get()
        })
        .then((doc) => {
            let return_data = doc.data()
            return_data.docId = doc.id
            return res.json({data: return_data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}