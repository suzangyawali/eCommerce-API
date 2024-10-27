import authService from "../services/authService.js"
import { createAuthToken } from "../helpers/authHelpers.js";

const register = async (req,res)=>{
    const data=req.body;
    if(!data.name|| !data.email || !data.password){
        return  res.status(422).send("Required data are missing");
    }
    if(data.password!==data.confirmPassword){
        return res.status(400).send("Password don't match");
    }
    if(data.password.length<6){
        return res.status(400).send("Password length must be greater than 6");
    }
   try{
    const user = await authService.register(data);

    const token = createAuthToken(user);
    res.cookie("authToken",token);
    res.status(201).json({...user,token});

    console.log(token);

    res.json(user);
   }catch(error){
    res.status(500).send(error.message);
   }
}

const login = async(req,res)=>{
    const data = req.body;
    // if(!data.email || !data.password){
    //     return res.status(422).send("Required data are missing");
    // }
    try{

     const user =   await authService.login(data);

     const token = createAuthToken(user);
 
     console.log(token);
       res.cookie("authToken",token,{httpOnly: true});
        res.json({...user,token});
    }catch(error){
    res.status(500).send(error.message);
    }
}
const logout =(req,res)=>{
    res.clearCookie("authToken");
    res.json({
        status:"Ok",
    })
}
const forgotPassword = async(req,res)=>{
  const email = req.body.email;
  if (!email) return res.status(422).send("Email is required");
  try{
    const data = await authService.forgotPassword(email);
    res.json(data);
  }catch(error){
    res.status(500).send(error.message);
  }
}
const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;

  const token = req.query.token;

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  try {
    await authService.resetPassword(password, token);

    res.send("Reset password successful.");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export  {register,login,logout,forgotPassword,resetPassword};