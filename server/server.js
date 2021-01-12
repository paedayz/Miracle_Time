let express = require("express")
let bodyParser = require("body-parser")

let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 3003);

app.get('/', (req,res) => {
    console.log('connected')
    return res.json({data: 'Yes sir'})
})

app.listen(app.get("port"), function () {
    console.log("run at port", app.get("port"));
  });