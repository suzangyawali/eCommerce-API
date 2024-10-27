import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true,
    },
    address:String,
    email:{
     type:String,
     required:true,
     lowercase:true,
     unique:true,
    },
    password:String,
    roles:{
     type:[String],
     default:["USER"],
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
});
export default mongoose.model("User",userSchema);