import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import connectDb from "./config/mongodb.js"
import authRoute from "./routes/userRoute.js"
connectDb()
const app=express();
const port=process.env.PORT || 4000;


app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));
app.use(express.urlencoded({extends:true}));

app.get('/',(req,res)=>{
    res.send("API working fine")
})

//API End points
app.use("/api/auth",authRoute)


app.listen(port,(req,res)=>{
    console.log(`server is running at PORT : ${port}`)
})