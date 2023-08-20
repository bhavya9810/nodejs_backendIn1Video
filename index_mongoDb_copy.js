import express from 'express';
import path from'path'
import mongoose from 'mongoose';



mongoose.connect("mongodb://localhost:27017",{
  dbName:"backend"
})
.then(()=>console.log("database connected"))
.catch((e)=>console.log(e))

const messageSchema=new mongoose.Schema({
  name:String,
  email:String,
})

const Message =mongoose.model("Message",messageSchema)


const app=express();



//setting up new engine
app.set("view engine","ejs")






//using middlewares
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.render("index")  
});


app.get("/success",(req,res)=>{
  res.render("success")  
});

app.post("/contact",async (req,res)=>{
//users.push(req.body)
const {name,email}=req.body //destructuring here
await Message.create({name:name,email:email})
// res.render("success")
res.redirect("/success")
});


app.get("/users",(req,res)=>{

  res.json({
    Message
  });

})

app.listen(4400,()=>{
    console.log("server is working")
})