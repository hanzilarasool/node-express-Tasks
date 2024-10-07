const router=require("express").Router();
const {addData,allUsers,deleteUser}=require("../controllers/user-controllers")

router.get("",allUsers)
router.post("/user", addData)
router.delete("/:id", deleteUser)

module.exports=router;