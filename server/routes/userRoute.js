import express from 'express';
import {register,login, logout, sendVerifyOtp} from "../controllers/authController.js"

const authRoute=express.Router()


authRoute.post('/register',register)
authRoute.post('/login',login)
authRoute.post('/logout',logout)
authRoute.post('/verifyOtp',sendVerifyOtp)

export default authRoute;