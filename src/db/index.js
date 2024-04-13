import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
        
    try{
        const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;
        const connectionInstance = await mongoose.connect(uri)    
        console.log(`mongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
        return connectionInstance;
    }
        
    catch(err){
        console.log('mongodb connection failed', err);
        process.exit(1);
    }
}

export default connectDB;
