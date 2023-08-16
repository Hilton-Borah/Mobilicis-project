import { userModel } from "@/lib/model/userModel";
import { NextResponse } from "next/server";

export async function PATCH (request,content){
    let payload = await request.json();
    console.log(payload)
    let userId = content.params.userId;
    try {
        await userModel.findByIdAndUpdate({"_id":userId},payload)
        return NextResponse.json({updateData:post,success:true})
    } catch (error) {
        return NextResponse.json({updateData:[],success:false})
    }
}       


// const payload=req.body;
//     const id=req.params.id;
//     const post =await CartModel.findOne({"_id":id});
//     const userID_in_post=post.userID;
//     const userID_in_req=req.body.userID;
//     try {
//         if(userID_in_post!==userID_in_req){
//             res.send({"msg":"You are not authorized"});
//         }
//         else{
//           await CartModel.findByIdAndUpdate({"_id":id},payload)
//           res.send("update the cart");
//         }
//     } catch (error) {
//         console.log(err);
//         res.send("something went wrong");
//     }