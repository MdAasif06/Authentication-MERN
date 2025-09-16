import express from "express";
import {
  register,
  login,
  logout,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRoute = express.Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/logout", logout);
authRoute.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRoute.post("/verify-account", userAuth, verifyEmail);

export default authRoute;
