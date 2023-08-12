const express = require("express");
const cors = require("cors");
const { connection } = require("./Controller/db");
const { userRoute } = require("./Routes/userRoute");


const app = express();

app.use(cors())
app.use(express.json())

app.use("/user",userRoute)


app.listen(4500,async()=>{
    try{
        await connection
        console.log("Database established")
    }catch(err){
        console.log("err",err)
    }
    console.log(`Server running on port ${process.env.PORT}`)
})