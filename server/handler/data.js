const {firebase, firestore} = require("../util/firebase")

exports.getAllEvents = (req, res) => {
    console.log(req.user.username)
    let user = firebase.auth().currentUser;
    if (user != null) {
        return res.json({uid : user.uid})
      }
}