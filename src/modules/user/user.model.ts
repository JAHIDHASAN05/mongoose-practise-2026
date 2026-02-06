import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { boolean } from "zod";


const userSchema= new Schema<TUser>({
    id:{type:String},
    password:{type:String, required:true},
    needsPasswordChange:{type:Boolean, default:true},
    role:{
        type:String,
        enum :['admin', 'student', 'stuff']
    },
    status:{
        type:String,
        enum: ['pending' , 'active' , 'blocked'],
        default:"pending"
    },
    isDeleted:{type:Boolean, default:false}

},{
    timestamps:true
})

export   const userModel= model<TUser>('user', userSchema);