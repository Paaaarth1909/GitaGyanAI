import bcrypt from 'bcrypt'
import { Users } from '../models/User.model.js'
import Joi from 'joi'
import express from 'express'
import route from '../startup/route.js'
import { authUrl, redirectUri , frontendUrl} from '../utils/constant.js'
import * as dotenv from "dotenv"
dotenv.config()


const router = express.Router()

router.post('/', async (req, res) => {
    try{
        const {error} = validate(req.body)
        if(error) return res.status(400).json({ message: error.message })

        let user = await Users.findOne({email: req.body.email})
        if(!user) return res.status(400).json({ message: "User is not registered" });

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) return res.status(400).json({ message: "Invalid Password" });
        
        //@ts-ignore
        const token = user.generateAuthToken()
        res.header('Authorization', token).json({
            success: true,
            message: "Login successful",
            token,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch(err:any){
        console.error("Login error",err)
        res.status(500).json({success: false, message: "Internal server error ", error: err.message})
    }
})

router.get('/auth/google', async(req,res) => {
    try{
        const params = new URLSearchParams({
            client_id: process.env.Client_id as string,
            redirect_uri: redirectUri,
            response_type: 'code',
            scope: "openid email profile"
        })
        res.redirect(`${authUrl}?${params.toString()}`)
    } catch(err:any){
        console.error("Google auth error",err)
        res.status(500).json({success: false, message: "Internal server error ", error: err.message})
    }
})

router.get('/auth/google/callback',async(req,res) => {
    const code = req.query.code
    if(!code) return res.status(400).json({message: "Authorization code not provided"})
    try{
        const tokenResponse = await fetch("https://oauth2.googleapis.com/token",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                code: code as string,
                client_id: process.env.Client_id as string,
                client_secret:process.env.Client_secret as string,
                redirect_uri: redirectUri,
                grant_type: "authorization_code"
            })
        })
        const tokenData = await tokenResponse.json()
        const accessToken = tokenData.access_token
        if(!accessToken) return res.status(400).json({message: "Access token not provided"})

        const userResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo",{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        const googleUser = await userResponse.json()

        let user = await Users.findOne({email: googleUser.email})
        if(!user){
            user = new Users({
                name: googleUser.name,
                email: googleUser.email,
                password: Math.random().toString(36).slice(-8)
            })
            await user.save()
        }
        //@ts-ignore
        const token = user.generateAuthToken();

        const FRONTEND_URL = frontendUrl
        res.redirect(`${FRONTEND_URL}/chat?token=${token}`);

    } catch(err:any){
        console.error("Google auth error",err)
        res.status(500).json({success: false, message: "Internal server error ", error: err.message})
    }
})

function validate(user: any) {
    const Schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
   return Schema.validate(user);
}

export default router