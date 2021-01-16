let express = require("express")
let bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3003);

// import functions
let {signup, login, checkAuthen, signout} = require('./handler/user')

// User Route
app.post('/signup',signup)
app.post('/login', login)
app.get('/authen', checkAuthen)
app.get('/signout', signout)


app.listen(app.get("port"), function () {
    console.log("run at port", app.get("port"));
  });