const {firebase, firestore, admin} = require("../util/firebase")

exports.addDaily = (req, res) => {
    const dailyData = {
        createdAt : new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok",}),
        username: req.user.username,
        detail: req.body.detail,
        mood: req.body.mood,
        name: req.body.name,
        image: req.body.image,
    }

    firestore.collection('daily').add(dailyData)
        .then((doc) => {
            return firestore.doc(`/daily/${doc.id}`).get()
        })
        .then((doc) => {
            let return_data = doc.data()
            return_data.docId = doc.id
            return res.json({data : return_data})
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
            data = data.sort((a, b) => {
                if (new Date(b.createdAt) > new Date(a.createdAt)) {
                  return 1;
                }
                if (new Date(b.createdAt) < new Date(a.createdAt)) {
                  return -1;
                }
                return 0;
              })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.editDaily = (req, res) => {
    console.log(req.body)
    firestore.doc(`/daily/${req.body.docId}`).get()
        .then((doc) => {
            if(doc.data().username !== req.user.username) {
                return res.status(403).json({message : 'Permission denied'})
            } else {
                return firestore.collection('daily').doc(doc.id).update({...req.body.update_data})
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

exports.deleteDaily = (req, res) => {
    const docId = req.body.docId
    firestore.doc(`/daily/${docId}`).get()
        .then((doc) => {
            if(doc.data().username !== req.user.username) {
                return res.status(403).json({message : 'Permission denied'})
            } else {
                return firestore.collection('daily').doc(docId).delete()
            }
        })
        .then(() => {
            return res.json({data : docId})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}