//const http=require("http")
import http from "http"
//const gfName=require("./features")
//import * as obj1 from "./features.js"
import {lovePercent} from "./features.js"
import fs, { readFileSync } from "fs";
import path from 'path';
//console.log(obj1)
//console.log(lovePercent())

console.log(path.dirname("/home/random/index.js"))



const home=fs.readFileSync("./index.html")


//console.log(gfName,gfName2,gfName3,gfName4)
const server=http.createServer((request,response)=>{

    console.log(request.method)
if(request.url==="/about"){
    response.end(`<h1>between you two love is ${lovePercent()} </h1> `)
    
}
else if(request.url==="/"){
   // response.end("<h1>we have reached home page</h1> ")
   fs.readFile("./index.html",(err,home)=>{
    response.end(home)
});
}
else if(request.url==="/contact"){
    response.end("<h1>we have reached contact page</h1> ")

}
else{
    response.end("<h1>Page not found</h1>")
}

})


server.listen(4400,()=>{
    console.log("server is working")

})