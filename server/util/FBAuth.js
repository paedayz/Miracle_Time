const { firebase, firestore } = require("./firebase");

module.exports = (req, res, next) => {
    let uid = req.body.clientUserId
    req.user = {
        username : null,
        userImage : null
    }
    if (uid != null) {
        firestore.collection('users').where('userId', '==', uid).limit(1).get()
            .then((snapshot) => {
                snapshot.forEach(function(doc){
                    req.user.username = doc.data().username;
                    req.user.userImage = doc.data().userImage;
                })
                return next();
            })
            .catch((err) => {
                console.error("Error while get user credential data", err);
                return res.status(403).json(err);
              });
    } else {
        console.log('Please Login First')
        return res.status(404).json({error: 'Please Login First'})
    }
};