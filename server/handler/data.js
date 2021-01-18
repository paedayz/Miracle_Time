const FBAuth = require("../util/FBAuth")
const {firebase, firestore} = require("../util/firebase")

exports.getAllEvents = (req, res) => {
    console.log(req.user.username)
    firestore.collection('events').where('username', '==', req.user.username).get()
        .then((snapshot) => {
            let data = []
            snapshot.forEach(function(doc){
                data.push(doc.data())
            })
            return res.json({data: data})
        })
        .catch((err) => {
            console.log(err)
            return res.json({error: err})
          })
}