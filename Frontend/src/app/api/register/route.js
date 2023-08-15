
import { connection } from "@/lib/db";
import { userModel } from "@/lib/model/userModel"
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export async function GET(request) {
  await connection
  let data = await userModel.find();
  console.log(data)

  return NextResponse.json({ success: true })
}

export async function POST(request) {
  let payload = await request.json();
  let { email } = payload;
  await connection
  try {
    let userEmail = await userModel.findOne({ email })
    console.log(userEmail)
    if (userEmail) {
      return NextResponse.json({ error: "User already exist" }, { status: 400 })
    } else {
      // bcrypt.hash(password, 5, async (err, hased_pass) => {
      //   if (err) {
      //     console.log("er")
      //   } else {
          let user =await new userModel(payload)
          await user.save()
          return NextResponse.json({ success: true })
      //   }
      // })
    }
    
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
