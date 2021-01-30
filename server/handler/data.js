const {firebase, firestore} = require("../util/firebase")

exports.getAllEvents = (req, res) => {
    firestore.collection('events').where('username', '==', req.user.username).get()
        .then((snapshot) => {
            let data = []
            snapshot.forEach(function(doc){
                let newData = {
                    date: doc.data().date,
                    detail: doc.data().detail,
                    event: doc.data().event,
                    key: doc.data().key,
                    rank: doc.data().rank,
                    time: doc.data().time,
                }
                data.push(newData)
            })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}

exports.addEvent = (req, res) => {
    let eventData = req.body
    let newData = {
        date: eventData.date,
        detail: eventData.detail,
        event: eventData.event,
        key: eventData.key,
        rank: eventData.rank,
        time: eventData.time,
        username: req.user.username,
        success : eventData.success
    }
    firestore.collection('events').add(newData)
        .then(() => {
            return firestore.collection('events').where('key', '==', newData.key).get()
        })
        .then((snapshot) => {
            let data = {}
            snapshot.forEach(function(doc){
                data = {
                    date: doc.data().date,
                    detail: doc.data().detail,
                    event: doc.data().event,
                    key: doc.data().key,
                    rank: doc.data().rank,
                    time: doc.data().time,
                }
            })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}

exports.editEvent = (req, res) => {
    let username = req.user.username
    let updateData = {
        date : req.body.date,
        detail : req.body.detail,
        event : req.body.event,
        key : req.body.key,
        rank : req.body.rank,
        time : req.body.time,
        username : username,
    }
    firestore.collection('events').where('key', '==', updateData.key).limit(1).get()
        .then((snapshot) => {
            snapshot.forEach(function(doc){
                return firestore.collection('events').doc(doc.id).set(updateData)
            })
        })
        .then(() => {
            return firestore.collection('events').where('username', '==', username).get()
        })
        .then((snapshot) => {
            let data = []
            snapshot.forEach(function(doc){
                let newData = {
                    date: doc.data().date,
                    detail: doc.data().detail,
                    event: doc.data().event,
                    key: doc.data().key,
                    rank: doc.data().rank,
                    time: doc.data().time,
                }
                data.push(newData)
            })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}