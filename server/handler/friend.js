const {firebase, firestore, admin} = require("../util/firebase")
const config = require("../util/config")

exports.addFriend = (req, res) => {
    const recipient = req.body.recipient

    if(recipient == req.user.username) {
        return res.status(403).json({error: 'You Can not send friend request to yourself'})
    }
    
    let friendSendReq = false

    firestore.doc(`/users/${recipient}`).get()
        .then((doc) => {
            if (!doc.exists) {
                return res.status(404).json({ error: "User not found" });
            }

            return firestore.collection('friend').where('recipient', '==', req.user.username).get()
        })
        .then((snapshot) => {
            let flag = 0
            if(snapshot) {
                snapshot.forEach((doc) => {
                    if(doc.data().sender === recipient) flag = 1
                })
            }
            

            if(flag === 1) {
                friendSendReq = true
                return res.status(403).json({error: 'You Can not send friend request to who send friend request to you'})
            }

            return firestore.collection('friend').where('sender', '==', req.user.username).get()
        })
        .then((snapshot) => {
            let flag = 0
            if(snapshot) {
                snapshot.forEach((doc) => {
                    if(doc.data().recipient === recipient) flag = 1
                })
            }

            if(flag === 0 && !friendSendReq) {
                const data = {
                    requestDate: new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok",}),
                    sender: req.user.username,
                    recipient: recipient,
                    accept: false
                }
                return firestore.collection('friend').add(data)
            } else {
                return res.status(403).json({error: 'Already send request'})
            }
        })
        .then(() => {
            return res.json({success: 'add success'})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.acceptFriendRequest = (req, res) => {
    let docId = req.body.docId
    let recipient = req.user.username
    let sender = req.body.sender

    firestore.doc(`/friend/${docId}`).get()
        .then((doc) => {
            if(doc.data().recipient !== recipient) {
                return res.status(403).json({error: 'Recipient not match'})
            } else if(doc.data().sender !== sender) {
                return res.status(403).json({error: 'Sender not match'})
            } else if (doc.data().accept === true) {
                return res.status(403).json({error: 'Already accept'})
            } else {
                return firestore.doc(`/friend/${docId}`).update({accept: true})
            }
        })
        .then(() => {
            return firestore.doc(`/users/${sender}`).get()
        })
        .then((doc) => {
            return res.json({data: doc.data()})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.deniedFriendRequest = (req, res) => {
    let docId = req.body.docId
    let recipient = req.user.username
    let deniedUsername
    let sender = req.body.sender

    firestore.doc(`/friend/${docId}`).get()
        .then((doc) => {
            deniedUsername = doc.data().sender
            if(doc.data().recipient !== recipient) {
                return res.status(403).json({error: 'Recipient not match'})
            } else if(doc.data().sender !== sender) {
                return res.status(403).json({error: 'Sender not match'})
            }  else {
                return firestore.doc(`/friend/${docId}`).delete()
            }
        })
        .then(() => {
            return firestore.doc(`/users/${sender}`).get()
        })
        .then(() => {
            return res.json({data: deniedUsername})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
        })
}

exports.getFriendRequest = (req, res) => {
    const username = req.user.username

    let friendRequest = []
    let friendRequestToFetch = []
    let friendRequestDocId = []

    firestore.collection('friend').where('recipient', '==', username).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if(!doc.data().accept) {
                    friendRequestToFetch.push(doc.data().sender)
                    friendRequestDocId.push(doc.id)
                }
            })

            const friendRequestPromise = friendRequestToFetch.map((reqUsername) => {
                return firestore.doc(`/users/${reqUsername}`).get()
              })

            Promise.all(friendRequestPromise)
                .then((data) => {
                    data.forEach((doc) => {
                        friendRequest.push(doc.data())
                    })
                })
                .catch((err) => {
                    console.log(err)
                    return res.json({error: err})
                })
            return firestore.collection('friend').where('recipient', '==', username).get() 
            
        })
        .then(() => {
            let friendRequestBuff = [];
            let reqNum = 0;
            friendRequest.map((request) => {
                request.docId = friendRequestDocId[reqNum];
                friendRequestBuff.push(request);
                reqNum = reqNum + 1;
            });

            friendRequest = friendRequestBuff;
            return res.json({data: friendRequest})
        })
}

exports.getFriendList = (req, res) => {
    const username = req.user.username

    let friendRequest = []
    let friendListToFetch = []
    let friendRequestDocId = []

    firestore
    .collection("friend")
    .where("recipient", "==", username)
    .get()
    .then((snapshot) => {
    snapshot.forEach((doc) => {
        if (doc.data().accept) {
        friendListToFetch.push(doc.data().sender);
        }
    });
    return firestore
        .collection("friend")
        .where("sender", "==", username)
        .get();
    })
    .then((snapshot) => {
    snapshot.forEach((doc) => {
        if (doc.data().accept) {
        friendListToFetch.push(doc.data().recipient);
        }
    });

    const friendListPromise = friendListToFetch.map((username) => {
        return firestore.doc(`/users/${username}`).get();
    });

    return Promise.all(friendListPromise)
        .then((data) => {
        let return_data = []
        data.forEach((doc) => {
            return_data.push(doc.data());
        });

        let friendRequestBuff = [];
        let reqNum = 0;
        return_data.map((request) => {
            request.docId = friendRequestDocId[reqNum];
            friendRequestBuff.push(request);
            reqNum = reqNum + 1;
        });

        res.status(200).json({data:friendRequestBuff}) 
        })
        .catch((err) => {
            console.log(err);
            return res.json({ error: err });
        });
    })
}

exports.getFriendEvent = (req, res) => {
     firestore.collection('events').where('username','==', req.body.friendUsername).get()
        .then((snapshot) => {
            let return_data = []
            snapshot.forEach(doc => {
                if(doc.data().date === req.body.date) {
                    return_data.push(doc.data())
                }
            });

            return res.status(200).json({data: return_data})
        })
        .catch((err) => {
            console.log(err);
            return res.json({ error: err });
        });
}