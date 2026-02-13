import { Schema, model } from "mongoose";
import {
  Gurdian,
  Student,
  StudentMethods,
  StudentModel,
  UserName,
} from "./students.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userNameSchema = new Schema<UserName>({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    maxLength: [20, "fisrt name maxlenth should not be more than 20"],
    validate: {
      validator: function (value: string) {
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

const StudentSchema = new Schema<Student, StudentModel, StudentMethods>({
  id: { type: String, required: true, unique: true },
  userId:{type:Schema.Types.ObjectId,required:[true, "userId is requried"],unique:true,ref:'User'},
  admissionSemister:{type:Schema.Types.ObjectId, ref:"academicSemister"},
  academicDepartment:{type:Schema.Types.ObjectId, ref:"academicDepartment"},
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
  presentAddress: { type: String },
  permanentAddress: { type: String },
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
  isDelated: {
    type: Boolean,
    default: false,
  },
  gurdian: {
    type: gurdianSchema,
    required: true,
  },
},{
  toJSON:{
    virtuals:true
  },
  timestamps:true
});

StudentSchema.virtual("fullName").get(function () {
  return `${this?.name?.first_name} ${this?.name?.middle_name} ${this?.name?.last_name}`
});

// StudentSchema.pre("save", async function () {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.BCRYPT_SALT_ROUNDS),
//   );
// });

// StudentSchema.post("save", function (doc, next) {
//   doc.password = "";
//   next();
// });

StudentSchema.pre("find", async function () {
  this.find({ isDelated: { $ne: true } });
});
StudentSchema.pre("findOne", async function () {
  this.find({ isDelated: { $ne: true } });
});

// console.log
StudentSchema.pre("aggregate", async function () {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
});

StudentSchema.methods.isUserExist = async function (id: string) {
  const exsitingUser = await studentModel.findOne({ id });
  return exsitingUser;
};

export const studentModel = model<Student, StudentModel>(
  "students",
  StudentSchema,
);
