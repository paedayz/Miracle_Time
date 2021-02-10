let express = require("express")
let bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3003);

let FBAuth = require('./util/FBAuth')

// import functions
let {
  signup, 
  login, 
  checkAuthen, 
  signout, 
  editProfile
} = require('./handler/user')

let {
  getAllEvents, 
  addEvent, 
  editEvent, 
  deleteEvent, 
  addNotifications, 
  readNotifications, 
  toggleNotifications
} = require('./handler/data')

// User Route
app.post('/signup',signup)
app.post('/login', login)
app.get('/authen', checkAuthen)
app.get('/signout', signout)
app.post('/editProfile' , FBAuth ,editProfile)

// Data Route
app.get('/getAllEvents',FBAuth, getAllEvents)
app.post('/addEvent', FBAuth, addEvent)
app.post('/editEvent', FBAuth, editEvent)
app.post('/deleteEvent', FBAuth, deleteEvent)
app.post('/addNotifications', FBAuth, addNotifications)
app.post('/readNotifications', FBAuth, readNotifications)
app.post('/toggleNotifications', FBAuth, toggleNotifications)

app.listen(app.get("port"), function () {
    console.log("run at port", app.get("port"));
  });