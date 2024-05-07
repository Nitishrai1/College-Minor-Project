const express=require("express");
const app=express();
const path=require('path');
const port=process.env.PORT || 4000
const server=app.listen(port,()=>{
    console.log("App listing at port",port);

    
})


app.use(express.static(path.join(__dirname,'public')));