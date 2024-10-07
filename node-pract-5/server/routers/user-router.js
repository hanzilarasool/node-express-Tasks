const router=require("express").Router();
const {addData,allUsers,deleteUser,userAuthenticated}=require("../controllers/user-controllers")
const authenticationMiddleware=require("../middlewares/authentication-middleware")
router.get("",allUsers)
router.post("/user", addData)
router.get("/secured",authenticationMiddleware,  userAuthenticated)
router.delete("/:id", deleteUser)

module.exports=router;