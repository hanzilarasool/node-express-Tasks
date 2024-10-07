const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config()
require("./utils/db") 
const port=process.env.PORT || 3000;
const userRouter=require("./routers/user-router")
const errorMiddleware=require("./middlewares/error-middleware");
// middleware configurations 
 
app.use(express.json());
app.use(cors()); 

// routes configuration
app.use("/api/users",userRouter)

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my website");
})


app.use(errorMiddleware);
app.listen(port,()=>{  
    console.log(`server is running on port ${port}`)
})  