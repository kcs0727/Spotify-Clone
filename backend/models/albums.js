import mongoose from "mongoose";


const schema= new mongoose.Schema({
    title:{
        type: String ,required:true
    },
    description:{
        type: String ,required:true
    },
    thumbnail:{
        id: String , url:String
    },
},{
    timestamps: true
})


const albums= mongoose.model("albums",schema);

export default albums;