const express=require("express");

const router=express.Router();

const Product=require("../model/ProductModel")

const {getProducts,getParticularProduct,addProduct,deleteProduct,updateProduct}=require("../controller/ProductController")

router.get("/",getProducts)

router.get("/:id",getParticularProduct)

router.post("/addproduct",addProduct)

router.delete("/deleteProduct/:id",deleteProduct)

router.put("/updateProduct/:id",updateProduct)


module.exports=router