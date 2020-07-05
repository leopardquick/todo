const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"))
app.set("view engine", "ejs")


app.get("/", (req, res) => {

  let data = new Date()

  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }

  let day = data.toLocaleDateString("en-US",options)

  res.render("index", {
    todayDate: day
  })
})

app.post("/",(req,res)=>{
       let {newItem:item} = req.body
       console.log(item)
       res.send("submited")
})



app.listen(3000, () => {
  console.log("listening at port 3000")
})
