const { userModel } = require("../Model/userModel");


const userRoute = require("express").Router();

userRoute.get("/get",async(req,res)=>{
    try{
        let post = await userModel.find()
        res.send({"success":post})
    }catch(err){
        res.send({"err":"Something went wrong"})
    }
})

userRoute.post("/post",async(req,res)=>{
    const data = req.body
    try{
        let post = new userModel(data)
        await post.save()
        res.send("Posted successfully")
    }catch(err){
        res.send({"err":"Something went wrong"})
    }
})

module.exports={
    userRoute
}