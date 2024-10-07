

const errorMiddleware=(err, req,res, next)=>{
console.log(err.stack,"are errors")
if(err.name==="ValidationError"){
    return res.status(400).json({message:err.message})
}
res.status(500).json({message:err.message})
 }
 
module.exports=errorMiddleware; 