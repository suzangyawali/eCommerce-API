import express from "express";
import {register,login,logout,forgotPassword,resetPassword} from "../contollers/authController.js"
const router=express.Router();
router.post("/forgot-password",forgotPassword)
router.post("/reset-password", resetPassword);

// post /api/auth/register
router.post("/register",register)



router.post("/login",login);

router.post("/logout",logout)
export default router;