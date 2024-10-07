const express=require("express");
const app=express();
const {rateLimit}=require("express-rate-limit");
const productRouter=require("./routers/product-router");
const cors=require("cors");  
const port=3000;

app.use(cors());
app.use(express.json()) 
const rateLimiter=rateLimit({
    windowMs: 15 * 60 *1000,
    message:"you have made too many requests to our website wait 15 minutes",
    max:10000
})
app.use(rateLimiter);
// middlewares to show req method , and req url 
app.use(function(req, res,next){
    console.log( `${req.method} from ${req.url}`);
    next();
})

app.use("/api/products",productRouter);


app.listen(port,()=>{
    console.log(`Server is listening at ${port} <http://localhost:${port}>`)
})