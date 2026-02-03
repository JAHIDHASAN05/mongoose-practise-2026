import { Schema, model } from "mongoose";
import { Gurdian, Student, UserName } from "./students.interface";

const userNameSchema = new Schema<UserName>({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    maxLength: [20, "fisrt name maxlenth should not be more than 20"],
    validate: {
      validator: function (value:string) {
        const capitalizedValue =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return value === capitalizedValue;
      },
      message: "{VALUE} is not capitalize ",
    },
  },
  middle_name: { type: String, required: [true, "middle name is required"] },
  last_name: { type: String, required: [true, "last name is required"] },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOccupation: { type: String },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
  motherOccupation: { type: String },
});

const StudentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, "name is required"],
  },
  email: { type: String, required: [true, "email is required"] },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "B+", "AB+", "O+"],
    required: true,
  },
  presentAddress:{type:String},
  permanentAddress:{type:String},
  gender: {
    type: String,
    enum: {
      values: ["female", "male"],
      message: `{VALUE}  is not suppored for gender value please try with male or female`,
    },
    required: [true, "gender is required"],
  },
  isActive: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
    required: true,
  },
  profileImage: { type: String },
  gurdian: {
    type: gurdianSchema,
    required: true,
  },
});

export const studentModel = model<Student>("students", StudentSchema);
