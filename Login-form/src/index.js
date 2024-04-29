const express=require("express");
const app=express();
const path=require("path");

const collection=require("./mongodb");

app.use(express.static("public"));




app.use(express.json());

app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/login.html")
})

app.post("/signup",async (req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data]);

    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/signup.html") //after every thing you will be directed to home

})

app.post("/login",async (req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.name})
        if(check && check.password===req.body.password){
            res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/index.html");
        }
        else{
            res.send("User does not exist please Sign up");
            
        }

    }catch{
        res.send("wrong details");
    }

    

});
app.get("/signup",(req,res)=>{
    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/signup.html");
})
app.get("/login",(req,res)=>{
    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/login.html")
    
})


app.get("/Property.html", (req, res) => {
    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/Property.html");
});
app.get("/contact1.html", (req, res) => {
    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/contact1.html");
});

app.get("/trial.html", (req, res) => {
    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/trial.html");
});
app.get("/index.html", (req, res) => {
    res.sendFile("C:/Users/hp/OneDrive/Desktop/MinorProject/frntend/index.html");
});



app.listen(3000,()=>{
    console.log("Port connected");
})

