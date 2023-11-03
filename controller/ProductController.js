const Product=require("../model/ProductModel")
const asyncHandler=require("express-async-handler")

const getProducts=asyncHandler(async(req,res)=>{

    try{

        const products=await Product.find();

        res.status(200).json(products);

    }
    catch(error){
        res.status(500)
        throw new Error("Error in the Get All Products")
    }
})

const getParticularProduct=asyncHandler(async(req,res)=>{

    try{

        const {id}=req.params;

        const product=await Product.findById(id);

        res.status(200).json(product);

    }
    catch(error){
        res.status(500)
        throw new Error("Error in the getParticularProduct")
    }

}
)


const addProduct=asyncHandler(async(req,res)=>{


    try {

        const product=await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        
         res.status(500)
         throw new Error("Error in adding the product")
    }

}
)



const deleteProduct=asyncHandler(async(req,res)=>{
    try{
         const {id}=req.params;
         const product= await Product.findByIdAndUpdate({_id:id})

         if(!product){
            return res.status(404).json({message:"Product not found with given id"})
        }

         res.status(200).send(product);
    }
    catch(error){
        res.status(500)
        throw new Error("Error in delete Product")
    }
}
)


const updateProduct=asyncHandler(async(req,res)=>{


    try {

        const {id}=req.params;
        const data=req.body;

        const product=await Product.findByIdAndUpdate(id,data);


        if(!product){
            return res.status(404).json({message:"Product not found with given id"})
        }

        const updatedProduct=await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        
         res.status(500)
         throw new Error("Error in update Product")
    }

})

module.exports={
getProducts,getParticularProduct,addProduct,deleteProduct,updateProduct
}