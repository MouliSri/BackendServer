const errorMiddleware=(err,req,res,next)=>{
    console.log("im here in the middleware")
    const statusCode=req.statusCode? req.statusCode:500;
    res.status(statusCode);
    res.json({message:err.message,stack:process.env.NODE_ENV==="development"? err.stack :null})
}


module.exports=errorMiddleware