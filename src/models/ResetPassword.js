import mongoose from "mongoose";
const resetPasswordSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
    expiresAt:{
        type:Date,
        default:Date.now()+3600000,//expires at 1 hour
    },


})
export default mongoose.model("ResetPassword",resetPasswordSchema)

