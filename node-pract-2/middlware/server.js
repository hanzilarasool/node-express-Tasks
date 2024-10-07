const express=require("express");
const app=express();

app.use(function(req, res,next){
    console.log(req.method + " " + req.url );
    next();
    //for every incomeing request this is the application level middleware which will print the incoming request method and endpoint url

})
app.use(function(err, req,res,next){
    console.log(err.stack,"are the error");
    res.status(500).send("Something broke on server", err.stack);
})
// now seeing Router level middleware
const apiRouter=express.Router();
app.use("/api",apiRouter);
//now seeing route level middleware

apiRouter.get("/user",(req,res)=>{
    res.status(200).json({name:"hanzila",age:15});
    res.end()

})
app.get("/",(req, res)=>{
    // faultyfunc() //uncomment this function to check weather error middlware works fine or not
    res.send("<h1>Home </h1>");
})

app.get("/about",(req, res)=>{
    // console.log(req)
    const {name , age}=req.query;
    res.status(200).send(`<h1> Name : ${name} and Age: ${age}</h1>`);
})

app.listen(3000,()=>{
    console.log("express server is listening to the port 3000")
})