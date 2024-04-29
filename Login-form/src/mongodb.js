const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Login-Form-Details")
.then(()=>{
    console.log("Mongo connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("Collection1",LogInSchema);

module.exports=collection