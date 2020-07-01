const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"))
app.set("view engine","ejs")


app.get("/", (req, res) => {

  let data = new Date()
  let currentDay = data.getDay()
  let day = ""

  if(currentDay == 0 || currentDay == 6 )day = "its weekend"
  else day = "its weekday"


  res.render("index" ,{ todayDate:day})
})
app.listen(3000, () => {
  console.log("listening at port 3000")
})
