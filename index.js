
require("dotenv").config()
const express=require("express")
const ProductRoutes=require("./routes/ProductRoutes")
const app=express()
const cors=require("cors")
const errorMiddleware=require("./middleware/errorMiddleware")
const mongoose = require('mongoose');



const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))





app.use("/products",ProductRoutes)


// to send form data
app.use(express.urlencoded({extended:false}))


mongoose.connect(MONGO_URL)
  .then(() => 
  {
  console.log("Connected to database")

  app.listen(PORT,()=>{
    console.log(`im running on the port ${PORT}`)
   })
}).catch((error)=>
  console.log(error))





app.get("/",(req,res)=>{

    //it will handle by middleware of error message
    // throw new Error("fake error")
    res.send("Hello im in Home Page")
})

app.use(errorMiddleware)








