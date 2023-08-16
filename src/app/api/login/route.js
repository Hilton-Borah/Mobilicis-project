
import { connection } from "@/lib/db";
import { userModel } from "@/lib/model/userModel"
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// export async function GET(request) {
//   await connection
//     let data = await userModel.find();
//     console.log(data)

//   return NextResponse.json({ success: true })
// }

export async function POST(request) {
  let {email,password} = await request.json();
  console.log(email,password)
  await connection
  try {
      let user = await userModel.findOne({email});
      console.log(user)
    if (user){
        let token = jwt.sign({ course: user._id }, "hilton")
        return NextResponse.json({ "message": "Login Successfully", "token": token,"id":user._id,"user":user})   
    } else {
        return NextResponse.json({ success: "Wrong credentials"})  
    }
  } catch (error) {
    return NextResponse.json({ success: false })  
  }
}



