import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import connectDb from "./config/mongodb.js"
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"
connectDb()
const app=express();
const port=process.env.PORT || 4000;

const allowOrigins=['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowOrigins,credentials:true}));
app.use(express.urlencoded({extends:true}));

app.get('/',(req,res)=>{
    res.send("API working fine")
})

//API End points
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port,(req,res)=>{
    console.log(`server is running at PORT : ${port}`)
})