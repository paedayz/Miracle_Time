const {firebase, firestore, admin} = require("../util/firebase")

exports.getAllEvents = (req, res) => {
    firestore.collection('events').where('username', '==', req.user.username).get()
        .then((snapshot) => {
            let data = []
            snapshot.forEach((doc) => {
                let newData = {
                    date: doc.data().date,
                    detail: doc.data().detail,
                    event: doc.data().event,
                    key: doc.data().key,
                    rank: doc.data().rank,
                    start: doc.data().start,
                    end: doc.data().end,
                    catagory: doc.data().catagory,
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
        start : eventData.start,
        end : eventData.end,
        catagory : eventData.catagory,
        username: req.user.username,
        success : eventData.success
    }
    firestore.collection('events').add(newData)
        .then(() => {
            return firestore.collection('events').where('key', '==', newData.key).get()
        })
        .then((snapshot) => {
            let data = {}
            snapshot.forEach((doc) => {
                data = {
                    date: doc.data().date,
                    detail: doc.data().detail,
                    event: doc.data().event,
                    key: doc.data().key,
                    rank: doc.data().rank,
                    start: doc.data().start,
                    end: doc.data().end,
                    catagory: doc.data().catagory,
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
        start : req.body.start,
        end : req.body.end,
        catagory : req.body.catagory,
        username : username,
    }
    firestore.collection('events').where('key', '==', updateData.key).limit(1).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                return firestore.collection('events').doc(doc.id).set(updateData)
            })
        })
        .then(() => {
            return firestore.collection('events').where('key', '==', updateData.key).get()
        })
        .then((snapshot) => {
            let data
            snapshot.forEach((doc) => {
                data = {
                    date: doc.data().date,
                    detail: doc.data().detail,
                    event: doc.data().event,
                    key: doc.data().key,
                    rank: doc.data().rank,
                    start: doc.data().start,
                    end: doc.data().end,
                    catagory: doc.data().catagory,
                }
            })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.deleteEvent = (req, res) => {
    let batch = firestore.batch()
    let path = firestore.collection('events')

    firestore.collection('events').where('key', '==', req.body.eventKey).get()
        .then((snapshot) => {
            let resKey
            snapshot.forEach((doc) => {
                if(doc.data().username === req.user.username) {
                    dataID = doc.id;
                    batch.delete(path.doc(dataID));
                    resKey = doc.data().key
                } else {
                    return res.status(403).json({error: 'No permission to delete this event'})
                }
                
            })
            batch.commit();
            return res.status(200).json({data : resKey})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.addNotifications = (req, res) => {
    const notiData = {
        createdAt : new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok",}),
        username : req.user.username,
        read : false,
        toggle : false,
        type : req.body.type,
        data : req.body.data,
    }

    let docId

    firestore.collection('notifications').add(notiData)
        .then((doc) => {
            docId = doc.id
            return firestore.doc(`/notifications/${docId}`).get()
        })
        .then((snapshot) => {
            const resData = {
                createdAt : snapshot.data().createdAt,
                read : snapshot.data().read,
                toggle : snapshot.data().toggle,
                type : snapshot.data().type,
                data : snapshot.data().data,
                docId : docId
            }
            return res.json({data : resData})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.readNotifications = async (req, res) => {
    const notificationsToUpdate = req.body.docIds
    const notificationReadPromise = notificationsToUpdate.map((notiDocId) => {
        return firestore.doc(`/notifications/${notiDocId}`).update({read: true})
      })

    const test = await Promise.all(notificationReadPromise)
        .then(() => {
            return notificationsToUpdate
        })
        .catch((err) => {
            return res.json({error: err})
        })

    return res.json({data: test})
}

exports.toggleNotifications = (req, res) => {
    const docId = req.body.docId
    firestore.collection('notifications').doc(docId).update({toggle : true})
        .then(() => {
            return res.json({data : docId})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}