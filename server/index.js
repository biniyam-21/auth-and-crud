import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { UserRouter } from "./routes/user.js";
import cors from 'cors'
dotenv.config()


const app = express();

app.use(express.json())
app.use(cors())
app.use('/auth', UserRouter)
mongoose.connect("mongodb://localhost:27017/authentication");




 app.listen(process.env.PORT, () =>{
console.log(`server is stated running on port ${process.env.PORT}`)
 })