import { Schema, model, connect, Model } from "mongoose";
import { Gurdian, Student, UserName } from "./students.interface";

const userNameSchema = new Schema<UserName>({
    first_name: { type: String, required: true },
    middle_name: { type: String, required: true },
    last_name: { type: String, required: true },
  })

  const gurdianSchema= new Schema<Gurdian>({
    fatherName:{type:String, required:true},
    fatherContactNo: {type: String, required:true},
    fatherOccupation:{type:String},
    motherName: {type:String, required:true},
    motherContactNo:{type:String, required:true},
    motherOccupation:{type:String}
  })

const StudentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name:userNameSchema ,
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: {type:String, required:true},
  bloodGroup: ["A+", "B+", "AB+", "O+"],
  gender: ["female", "male"],
  isActive: ["active", "inactive"],
  profileImage:{type:String},
  gurdian:gurdianSchema
});


export const studentModel = model<Student>('students', StudentSchema)