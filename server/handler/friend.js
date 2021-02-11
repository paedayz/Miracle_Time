const {firebase, firestore, admin} = require("../util/firebase")
const config = require("../util/config")

exports.addFriend = (req, res) => {
    const recipient = req.body.recipient
    let recipientData = {}

    firestore.doc(`/users/${recipient}`).get()
        .then((doc) => {
            if (!doc.exists) {
                return res.status(404).json({ error: "User not found" });
            }

            return firestore.collection('friend').where('sender', '==', req.user.username).get()
        })
        .then((snapshot) => {
            
            if(snapshot.docs.length == 0) {
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