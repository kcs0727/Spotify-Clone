import express from 'express'

import isauth from '../middlewares/isauth.js';
import { loginuser, logoutuser, myprofile, registeruser, addtoplaylist } from '../controllers/usercontrollers.js';
import { signupvalidation } from '../middlewares/validation.js';
const router= express.Router()


router.post("/register", signupvalidation, registeruser);

router.post("/login",loginuser);

router.get("/me",isauth ,myprofile);

router.get("/logout",isauth,logoutuser);

router.post("/playlist/:id",isauth,addtoplaylist);

export default router;