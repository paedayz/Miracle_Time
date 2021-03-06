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
                    privacy: doc.data().privacy,
                    createdAt : doc.data().createdAt,
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

exports.getEventByMonth = (req, res) => {
    let date = req.body.date
    firestore.collection('events').where('username', '==', req.user.username).get()
        .then((snapshot) => {
            let return_data = []
            snapshot.forEach((doc) => {
                if(doc.data().date.startsWith(date)) {
                    let newData = {
                        date: doc.data().date,
                        detail: doc.data().detail,
                        event: doc.data().event,
                        key: doc.data().key,
                        rank: doc.data().rank,
                        start: doc.data().start,
                        end: doc.data().end,
                        catagory: doc.data().catagory,
                        privacy: doc.data().privacy,
                        createdAt : doc.data().createdAt,
                    }
                    return_data.push(newData)
                }
            })
            return res.status(200).json({data: return_data})
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
        success : eventData.success,
        privacy : eventData.privacy,
        createdAt : new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok",}),
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
                    privacy: doc.data().privacy,
                    createdAt: doc.data().createdAt,
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
        privacy : req.body.privacy,
        createdAt: req.body.createdAt,
        username : username,
    }
    console.log(updateData)
    firestore.collection('events').where('key', '==', updateData.key).limit(1).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                return firestore.collection('events').doc(doc.id).update(updateData)
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
                    privacy: doc.data().privacy,
                    createdAt: doc.data().createdAt,
                    success: doc.data().success
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
    let eventPath = firestore.collection('events')
    let notiPath = firestore.collection('notifications')
    let resKey
    let resNotiArray = []

    firestore.collection('events').where('key', '==', req.body.eventKey).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.data().username === req.user.username) {
                    let dataID = doc.id;
                    batch.delete(eventPath.doc(dataID));
                    resKey = doc.data().key
                } else {
                    return res.status(403).json({error: 'No permission to delete this event'})
                }
                
            })
            return firestore.collection('notifications').where('data.eventData.key', '==', resKey).get()
        })
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.data().username === req.user.username) {
                    let dataID = doc.id;
                    batch.delete(notiPath.doc(dataID));
                    resNotiArray.push(dataID)
                } else {
                    return res.status(403).json({error: 'No permission to delete this event'})
                }
                
            })

            batch.commit();
            return res.status(200).json({data : resKey, notiDelArray: resNotiArray})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.toggleEventSuccess = (req, res) => {
    const docId = req.body.docId
    firestore.doc(`/events/${docId}`).update({success: true})
        .then(() => {
            return res.json({data: docId})
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
    console.log(notificationsToUpdate)
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

exports.deleteNotifications = (req, res) => {
    const docId = req.body.docId
    firestore.collection('notifications').doc(docId).delete()
        .then(() => {
            return res.json({data : docId})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.getAdminDashBoard = async (req, res) => {
    const status = req.user.status
    if(status === "admin") {
        const eventData = await firestore.collection('events').orderBy('createdAt').get()
            .then((snapshot) => {
                let returnData = []
                let sum = 0
                snapshot.forEach((doc) => {
                    const year = doc.data().createdAt.split(',')[0].split('/')[2]
                    let month = doc.data().createdAt.split(',')[0].split('/')[0]
                    if(parseInt(10,month) < 10){
                        month = `0${month}`
                    }
                    sum = sum + 1
                    if(returnData.length === 0) {
                        // returnData[`${year}-${month}`] = {}
                        returnData.push({a: `${year}-${month}-01`, b: 1})
                    } else {
                        if(returnData[returnData.length - 1].a.split('-')[1] === month) {
                            returnData[returnData.length - 1].b = returnData[returnData.length - 1].b + 1
                        } else {
                            returnData.push({a: `${year}-${month}-01`, b: 1})
                        }
                    }
                })
                return returnData
            })
        
        res.json({data: eventData})
    } else {
        res.status(403).json({message: 'Fuck off this is only admin'})
    }
}

exports.buyTheme = (req, res) => {
    const setting_docId = req.body.setting_docId
    const theme_id = req.body.theme_id
    const new_user_coin = req.body.new_user_coin
    firestore.collection('setting').doc(setting_docId).get()
        .then((doc) => {
            console.log(doc.data().buy_theme)
            if(doc.data().buy_theme){
                let old_buy_theme = doc.data().buy_theme
                old_buy_theme.push(theme_id)
                old_buy_theme = old_buy_theme.sort()
                return firestore.collection('setting').doc(setting_docId).update({buy_theme: old_buy_theme})
            } else {
                return firestore.collection('setting').doc(setting_docId).update({buy_theme:[theme_id]})
            }
        })
        .then(() => {
            return firestore.collection('users').doc(req.user.username).update({coin: new_user_coin})
        })
        .then(() => {
            return res.status(200).json({theme_id, new_user_coin})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}