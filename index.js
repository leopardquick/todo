const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin-n:dnWY0eyJF76ZqDSA@cluster0.fbqm9.mongodb.net/todolistDB",{useNewUrlParser: true , useUnifiedTopology: true})



const itemSchema =  mongoose.Schema({
  name : {
    type : String
  }
})

const  Item =  mongoose.model("Item",itemSchema)





const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"))
app.set("view engine", "ejs")


app.get("/", (req, res) => {
  Item.find((err,item)=>{
    if(err){
      console.log(err)
    }else{
      res.render("index",{
        todayDate : "Today",
        newListItem : item
      })
    }
  })

})

app.get("/:routeName",(req,res)=>{
  const routeName = req.params.routeName
})

app.get("/about",(req,res)=>{
  res.render("about")
})



app.post("/",(req,res)=>{

       if(req.body.submit=="work"){
         work.push(req.body.newItem)
         res.redirect("/work")
       }else {
         const todoItem = new Item({
           name : req.body.newItem
         })
         todoItem.save()
         res.redirect("/")
       }

})

app.post("/delete",(req,res)=>{
  Item.deleteOne({_id : req.body.checkbox},err=>{
    if (err) {
      console.log(err);
    } else {
      console.log("sucessfully deleted");
      res.redirect("/")
    }
  })
})



app.listen(process.env.PORT || 3000, () => {
  console.log("listening at port 3000")
})
