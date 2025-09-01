import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: String, default: "user"
    },
    playlist: {
        type: [String], default: []
    },
    verified:{
        type: Boolean, default:false
    },
    verifyToken: { 
        type: String 
    },
    verifyTokenExpiry: {
        type: Date 
    },
},
    { timestamps: true })

const users = mongoose.model("users", schema);

export default users;