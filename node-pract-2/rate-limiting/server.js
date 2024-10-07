const express=require("express");
const {rateLimit}=require("express-rate-limit")
// console.log(rateLimit)
const app=express();
const rateLimiter=rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 2, //limit each Ip to 2 req per 15 minutes 
    message:"wait 15 minutes ,you have made too many requests",
    standardHeaders: true, // return rate limit info in the `RateLimit-*` headers

})

app.get("/",(req, res)=>{
    res.send("Hellow home");
})
app.get("/about",rateLimiter ,(req, res)=>{
    res.send("Hellow about");
})

app.listen(3000,()=>{
    console.log("server is listening at port 3000");
})