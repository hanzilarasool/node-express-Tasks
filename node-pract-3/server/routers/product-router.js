const router=require("express").Router();
const {getAllProducts, addProduct, deleteProduct, updateProduct}=require("../controllers/product-controllers")
 //controller would be here in second parameter
router.get("/",  getAllProducts)
router.post("/post",addProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct)

module.exports=router;