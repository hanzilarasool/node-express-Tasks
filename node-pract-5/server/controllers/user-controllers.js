const User=require("../models/user-model")

const addData= async(req,res)=>{
    const {username,email,password}=req.body;
    console.log(username,email,password,"are user credentials");
    const newUser=new User({username,email,password});
    await newUser.save();
    res.status(200).send(newUser);
}
const allUsers=async(req,res)=>{
const userList=await User.find();
res.status(200).json(userList);
}

const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const deletedUser=await User.findByIdAndDelete(id);
    console.log(deleteUser,"is the deleted user credentials");
    res.status(200).send("user deleted successfully")
}
const userAuthenticated=(req,res)=>{
    res.status(200).send({token:req.token})
}
module.exports={addData,allUsers,deleteUser,userAuthenticated} 