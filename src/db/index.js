import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://admin:1234@ac-j1lt3nl-shard-00-00.aluncuq.mongodb.net:27017,ac-j1lt3nl-shard-00-01.aluncuq.mongodb.net:27017,ac-j1lt3nl-shard-00-02.aluncuq.mongodb.net:27017/?ssl=true&replicaSet=atlas-w2bowf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB