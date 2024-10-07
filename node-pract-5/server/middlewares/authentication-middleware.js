const authentication=(req,res,next)=>{
    const token=req.header('Authorization');
    console.log(token, "is the token")
    if(!token) {
        return res.status(401).send({message:'Access denied. No token provided.'})
        next();
    }else{
        // token found logic find the user ,  and bind it with req object req.user by checking the token
        // const decoded=jwt.verify(token,process.env.JWT_SECRET);
        // req.user=decoded;
        console.log("user found and passed through middleware");
        req.token=token;
        next();

    }
}

module.exports=authentication;