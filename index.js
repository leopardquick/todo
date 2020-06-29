const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended : true}))


app.get("/",(req,res)=>{
      res.send("working with es3")
})
app.listen(3000,()=>{
  console.log("listening at port 3000")
})
