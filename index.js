
require("dotenv").config()
const express=require("express")

const ProductRoutes=require("./routes/ProductRoutes")

const app=express()

const cors=require("cors")


const errorMiddleware=require("./middleware/errorMiddleware")




const mongoose = require('mongoose');

const MONGO_URL=process.env.MONGO_URL

const PORT=process.env.PORT || 5000


const corsOption={
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}

app.use(cors(corsOption))



app.use(express.json())


app.use("/products",ProductRoutes)


// to send form data
app.use(express.urlencoded({extended:false}))


mongoose.connect(MONGO_URL)
  .then(() => 
  {
  console.log("Connected to database")

  app.listen(PORT,'0.0.0.0',()=>{
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








