const config = require("./config")
const firebase = require("firebase")

firebase.initializeApp(config.firebaseConfig);

const firestore = firebase.firestore()

module.exports = { firebase, firestore };