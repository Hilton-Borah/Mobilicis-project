
import { connection } from "@/lib/db";
import { userModel } from "@/lib/model/userModel"
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export async function GET(request,response) {
  await connection
  let data = await userModel.find();
  console.log(data)
  return NextResponse.json({ success: data })
}

export async function POST(request) {
  let payload = await request.json();
  let { email } = payload;
  await connection
  try {
    let userEmail = await userModel.findOne({ email })
    console.log(userEmail)
    if (userEmail) {
      return NextResponse.json({ success: "User already exist" }, { status: 400 })
    } else {
      // bcrypt.hash(password, 5, async (err, hased_pass) => {
      //   if (err) {
      //     console.log("er")
      //   } else {
          let user =await new userModel(payload)
          await user.save()
          return NextResponse.json({ success: "Your account created successfully" })
      //   }
      // })
    }
    
  } catch (error) {
    return NextResponse.json({ success: "Something went wrong" })
  }
}
