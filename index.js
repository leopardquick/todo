const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")



const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"))
app.set("view engine", "ejs")

let item = []
let work = []
app.get("/", (req, res) => {

  res.render("index", {
    todayDate: date.getDate(),
    newListItem:item
  })
})

app.get("/work",(req,res)=>{
  res.render("index",{
    todayDate : "work" ,
    newListItem : work
  })
})

app.get("/about",(req,res)=>{
  res.render("about")
})



app.post("/",(req,res)=>{

       if(req.body.submit=="work"){
         work.push(req.body.newItem)
         res.redirect("/work")
       }else {
         item.push(req.body.newItem)
         res.redirect("/")
       }

})



app.listen(process.env.PORT || 3000, () => {
  console.log("listening at port 3000")
})
