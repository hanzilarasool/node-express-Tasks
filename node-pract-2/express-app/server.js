const express=require("express");
const app=express();

app.get("/",(req, res)=>{
    res.send("<h1>Home </h1>");
})

app.get("/about",(req, res)=>{
    console.log(req)
    const {name , age}=req.query;
    res.status(200).send(`<h1> Name : ${name} and Age: ${age}</h1>`);
})

app.listen(3000,()=>{
    console.log("express server is listening to the port 3000")
})