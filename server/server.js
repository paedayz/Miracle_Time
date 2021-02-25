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
  toggleNotifications,
  deleteNotifications,
  toggleEventSuccess
} = require('./handler/data')

let {
  addFriend,
  acceptFriendRequest,
  deniedFriendRequest,
  getFriendRequest
} = require('./handler/friend')

let {
  addQuest, 
  adminGetQuestList, 
  doQuest, 
  deleteQuest, 
  editQuest, 
  getUserQuest, 
  claimQuest
} = require('./handler/quest')

let {
  addAchievement, 
  adminGetAchievementList, 
  doAchievement, 
  deleteAchievement, 
  editAchievement, 
  getUserAchievement,
} = require('./handler/achievement')

// User Route
app.post('/signup',signup)
app.post('/login', login)
app.post('/authen', checkAuthen)
app.get('/signout', signout)
app.post('/editProfile' , FBAuth ,editProfile)

// Friend Route
app.post('/getFriendRequest', FBAuth, getFriendRequest)
app.post('/addFriend', FBAuth, addFriend)
app.post('/acceptFriendRequest', FBAuth, acceptFriendRequest)
app.post('/deniedFriendRequest', FBAuth, deniedFriendRequest)

// Data Route
app.post('/getAllEvents',FBAuth, getAllEvents)
app.post('/addEvent', FBAuth, addEvent)
app.post('/editEvent', FBAuth, editEvent)
app.post('/deleteEvent', FBAuth, deleteEvent)
app.post('/toggleEventSuccess', FBAuth, toggleEventSuccess)
app.post('/addNotifications', FBAuth, addNotifications)
app.post('/readNotifications', FBAuth, readNotifications)
app.post('/toggleNotifications', FBAuth, toggleNotifications)
app.post('/deleteNotifications', FBAuth, deleteNotifications)

// Quest Route
app.post('/addQuest', FBAuth, addQuest)
app.post('/adminGetQuestList', FBAuth, adminGetQuestList)
app.post('/doQuest', FBAuth, doQuest)
app.post('/deleteQuest', FBAuth, deleteQuest)
app.post('/editQuest', FBAuth, editQuest)
app.post('/getUserQuest', FBAuth, getUserQuest)
app.post('/claimQuest', FBAuth, claimQuest)

// Achievement Route
app.post('/addAchievement', FBAuth, addAchievement)
app.post('/adminGetAchievementList', FBAuth, adminGetAchievementList)
app.post('/doAchievement', FBAuth, doAchievement)
app.post('/deleteAchievement', FBAuth, deleteAchievement)
app.post('/editAchievement', FBAuth, editAchievement)
app.post('/getUserAchievement', FBAuth, getUserAchievement)


app.listen(app.get("port"), function () {
    console.log("run at port", app.get("port"));
  });