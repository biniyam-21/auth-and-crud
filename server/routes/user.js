import express from "express";
import bcrypt from 'bcrypt'
import { User } from "../models/User.js";

const router = express.Router()

router.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
const user = User.findOne({email})
if(user) res.json({message: "user already existed"})
    const hashPassword = await bcrypt.hash(password, 10)
const newUser = new User({
    username,
    email,
    password: hashPassword,
})

await newUser.save()
return res.json({status: true, message: "record registered"})
})

export {router as UserRouter}