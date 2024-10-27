import ResetPassword from "../models/ResetPassword.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const register= async (data)=>{
  const userExists= await User.findOne({email:data.email});
  if(userExists) throw new Error("Email already exists");
 const hashPassword = bcrypt.hashSync(data.password);

 const createdUser= await User.create({
    name:data.name,
    address:data.address,
    email:data.email,
    password:hashPassword,
    roles:data.roles,
  });
  return {
    id:createdUser._id,
    name:createdUser.name,
    address: createdUser.address, 
    email:createdUser.email,
    roles:createdUser.roles,
  }
};

const login = async (data)=>{
  const existingUser= await User.findOne({email:data.email});
  if(!existingUser) throw new Error("Email or password doesn't match");
  const isMatch= bcrypt.compareSync(data.password,existingUser.password);
  if(!isMatch) throw new Error("Email or Password doesn't match");
  return{
    id:existingUser._id,
    name: existingUser.name,
    email: existingUser.email,
    roles:existingUser.roles,
};

}

const forgotPassword = async(email)=>{
  const user = await User.findOne({email});

 const currentTimeStamp= Date.now();
 const token =bcrypt.hashSync(`${email}-${currentTimeStamp}`);
  const data= await ResetPassword.create({
    userId:user._id,
    token,
  });
  return {userId:user._id, token:data.token};
};

const resetPassword = async (password, token) => {
  const data = await ResetPassword.findOne({
    token,
    expiresAt: { $gt: Date.now() },
  });

  if (!data) throw new Error("Token is invalid.");

  const hashPassword = bcrypt.hashSync(password);

  const result = await User.findOneAndUpdate(data.userId, {
    password: hashPassword,
  });

  await ResetPassword.findByIdAndDelete(data._id);

  return result;
};

export default {
    register,login,forgotPassword,resetPassword
}