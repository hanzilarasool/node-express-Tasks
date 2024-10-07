const mongoose=require("mongoose");


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Error connecting to MongoDB");
}) 