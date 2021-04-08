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
  editProfile,
  setSelectMood,
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
  toggleEventSuccess,
  getAdminDashBoard,
  getEventByMonth,
  buyTheme
} = require('./handler/data')

let {
  addFriend,
  acceptFriendRequest,
  deniedFriendRequest,
  getFriendRequest,
  getFriendList,
  getFriendEvent
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

let {addDaily, getUserDaily, editDaily, deleteDaily} = require('./handler/daily')

app.get('/test', function test(req, res) {
  res.json({success: true})
})

// Shop
app.post('/buyTheme', FBAuth, buyTheme)

// Daily Route
app.post('/addDaily', FBAuth, addDaily)
app.post('/getUserDaily', FBAuth, getUserDaily)
app.post('/editDaily', FBAuth, editDaily)
app.post('/deleteDaily', FBAuth, deleteDaily)

// User Route
app.post('/signup',signup)
app.post('/login', login)
app.post('/authen', FBAuth ,checkAuthen)
app.get('/signout', signout)
app.post('/editProfile' , FBAuth ,editProfile)
app.post('/setSelectMood' , FBAuth ,setSelectMood)

// Friend Route
app.post('/getFriendRequest', FBAuth, getFriendRequest)
app.post('/getFriendList', FBAuth, getFriendList)
app.post('/addFriend', FBAuth, addFriend)
app.post('/acceptFriendRequest', FBAuth, acceptFriendRequest)
app.post('/deniedFriendRequest', FBAuth, deniedFriendRequest)
app.post('/getFriendEvent', FBAuth, getFriendEvent)

// Data Route
app.post('/getAllEvents',FBAuth, getAllEvents)
app.post('/getEventByMonth',FBAuth, getEventByMonth)
app.post('/addEvent', FBAuth, addEvent)
app.post('/editEvent', FBAuth, editEvent)
app.post('/deleteEvent', FBAuth, deleteEvent)
app.post('/toggleEventSuccess', FBAuth, toggleEventSuccess)
app.post('/addNotifications', FBAuth, addNotifications)
app.post('/readNotifications', FBAuth, readNotifications)
app.post('/toggleNotifications', FBAuth, toggleNotifications)
app.post('/deleteNotifications', FBAuth, deleteNotifications)
app.post('/getAdminDashBoard', FBAuth, getAdminDashBoard)

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