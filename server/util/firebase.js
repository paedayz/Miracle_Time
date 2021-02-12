const config = require("./config")
const firebase = require("firebase")
const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: config.firebaseConfig.storageBucket
});

firebase.initializeApp(config.firebaseConfig);

const firestore = firebase.firestore()

module.exports = { firebase, firestore, admin };