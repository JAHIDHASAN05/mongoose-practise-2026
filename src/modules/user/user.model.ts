import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'

const userSchema = new Schema<TUser>(
  {
    id: { type: String ,unique:true},
    password: {
      type: String,
      required: true,
      maxLength: [20, "password cannot be contain more than 20 character"],
    },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ["admin", "student", "stuff"],
    },
    status: {
      type: String,
      enum: ["pending", "active", "blocked"],
      default: "pending",
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);


userSchema.pre('save', async function name() {
   this.password= await bcrypt.hash(this.password, 12)
    
})
export const userModel = model<TUser>("user", userSchema);
