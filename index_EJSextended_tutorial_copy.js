import express from 'express';
import path from'path'
const app=express();


//setting up new engine
app.set("view engine","ejs")

const users=[]



//using middlewares
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.render("index",{name:"Bhavya"})  
});

app.get("/success",(req,res)=>{
  res.render("success")  
});

app.post("/contact",(req,res)=>{
//users.push(req.body)
users.push({userName:req.body.name,userEmail:req.body.email})
console.log(users)
// res.render("success")
res.redirect("/success")
});


app.get("/users",(req,res)=>{

  res.json({
    users,
  });

})

app.listen(4400,()=>{
    console.log("server is working")
})