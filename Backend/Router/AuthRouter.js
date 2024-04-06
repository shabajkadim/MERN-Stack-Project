import { Router } from "express";
import { Login,  SignUp } from "../Controller/Auth.Controller.js";


const router=Router()

// router.get('/register',Register)
router.post('/signup',SignUp)
router.post('/login',Login)

export default router