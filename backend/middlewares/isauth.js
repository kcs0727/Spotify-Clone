import jwt from "jsonwebtoken";
import users from "../models/users.js";

const isauth= async(req,res,next)=>{
    try{
        const token= req.cookies.token;

        if(!token){
            return res.status(403).json({
                message:"unauthorized, JWT token required"
            })
        }

        const data= jwt.verify(token,process.env.JWT_SECRET);
        req.user= await users.findById(data.id).select("-password");
        next();

    }
    catch(err){
        return res.status(403).json({
            message:"Invalid or expired token, Please login again"
        })
    }
}

export default isauth;