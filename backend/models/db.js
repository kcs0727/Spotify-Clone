import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const url=process.env.MONGO_URL;
        await mongoose.connect(url);
        console.log("MongoDB connected");
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB;
