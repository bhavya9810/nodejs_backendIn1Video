import express from 'express';
import path from'path'
const app=express();


//setting up new engine
//app.set("view engine","ejs")

app.use(express.static(path.join(path.resolve(),"public")))

app.get("/",(req,res)=>{
  res.render("index.ejs",{name:"Bhavya"})  //if setting up the engine then u dont need to use extension ejs
// res.sendFile("index.html")
});

app.listen(4400,()=>{
    console.log("server is working")
})