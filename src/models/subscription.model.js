import mongoose , {Schema} from "mongoose";
import { User } from "./user.model";


const subscriptionSchema=new Schema({
    subscriber:{
        type:Schema.Types.ObjectId,  //one who is subscribing
        ref:"User"
    },
    subscriber:{
        type:Schema.Types.ObjectId,  //one who subscriber is subscribing i
        ref:"User"
    }
})


export const Subscription =mongoose.model("Subscription",subscriptionSchema)