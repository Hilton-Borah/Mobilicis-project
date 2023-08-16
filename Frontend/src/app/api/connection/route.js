import { connection } from "@/lib/db";
import { connectionModel } from "@/lib/model/connectionsModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connection
  let data = await connectionModel.find();
  console.log(data)
  return NextResponse.json({ success: data })
}


export async function POST(request) {
  let payload = await request.json();
  await connection
  try {
    let user = await new connectionModel(payload)
    await user.save()
    return NextResponse.json({ success: "Data posted" })

  } catch (error) {
    return NextResponse.json({ success: "Something went wrong" })
  }
}