const mongoose=require("mongoose")


const productSchema=mongoose.Schema(
    {
        productName:{
            type:String,
            unique:true,
            required:[true,"Please Enter the Product Name"]
        },
        productPrice:{
            type:Number,
            required:true
        },
        productColour:{
            type:String,
            required:true
        },
        productQuantity:{
            type:Number,
            required:true,
            default:0
        },
        productDescription:{
            type:String,
            required:true
        },
        productReview:{
            type:Array
        }

    },{
        timestamps:true
    }
)


const Product=mongoose.model("Product",productSchema)

module.exports=Product;