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
        username: req.user.username
    }
    firestore.collection('events').add(newData)
        .then(() => {
            return firestore.collection('events').where('username', '==', req.user.username).get()
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