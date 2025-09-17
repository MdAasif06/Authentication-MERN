import express from "express";
import {
  register,
  login,
  logout,
  sendVerifyOtp,
  verifyEmail,
  isAuthenticated,
  sendResetOtp,
  resetPassword,
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRoute = express.Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/logout", logout);
authRoute.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRoute.post("/verify-account", userAuth, verifyEmail);
authRoute.post("/is-auth", userAuth, isAuthenticated);
authRoute.post("/send-reset-otp", sendResetOtp);
authRoute.post("/reset-password", resetPassword);

export default authRoute;
