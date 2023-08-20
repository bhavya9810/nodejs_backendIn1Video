import express from 'express';
import path from 'path'
const app=express();

app.get("/",(req,res)=>{
   // res.send("hi")
    // res.sendStatus(400)
//res.status(400).send("meri marzi")

const pathLocation=path.resolve()
res.sendFile(path.join(pathLocation,"./index.html"));
 


// res.json({
//         "_id": "64de6ff3647d7cf7f4e44877",
//     "index": 0,
//     "guid": "4b905fb1-39e6-466f-8d2a-587f574cb594",
//     "isActive": true,
//     })
});

app.listen(4400,()=>{
    console.log("server is working")
})