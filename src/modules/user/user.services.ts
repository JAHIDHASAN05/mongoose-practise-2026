import { Student } from "../students/students.interface";
import { studentModel } from "../students/students.model";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";
import { generateStudentId } from "./user.utils";
import { academicSemisterModel } from "../academicSemister/academicSemister.model";
import mongoose, { Types } from "mongoose";
import AppError from "../../error/AppError";
import { academicDepartment } from "../academicDepartment/academicDepartment.model";


const CreateUserIntoDB = async (password: string, student: Student) => {
  let user: Partial<TUser> = {
    password: password || "JahidDefaultPassword",
    id: "adasdfadfadf",
    role: "student",
  };

  const session = await mongoose.startSession()

  try {
    session.startTransaction()
  
     const admissionSemister = await academicSemisterModel.findOne({
    _id: new Types.ObjectId(student.admissionSemister),
  }).session(session);
  if (!admissionSemister) {


    throw new AppError(400, "admistion semister is not valid");
  }
  const academicDepartmentExist = await academicDepartment.findOne({
    
    _id: new Types.ObjectId(student.academicDepartment),
  }).session(session);

  if (!academicDepartmentExist) {

    
    console.log({academicDepartment},student.academicDepartment);
    throw new AppError(400, "academic Department  is not valid");
  }

  user.id = await generateStudentId(admissionSemister);

  const result = await userModel.create([user],{session});

  if (!result.length) {
    throw new AppError(404,'Failed to create user')
  }
      ((student.id = result[0].id), (student.userId = result[0]._id));

    const newStudent = await studentModel.create([student],{session});


     if(!newStudent.length){
        throw new AppError(404,'Failed to create student')
     }

     await session.commitTransaction()
     await session.endSession()
    return newStudent;
  } catch (error) {

    await session.abortTransaction()
    await session.endSession()
    throw error
  }


 
};

export const UserServices = {
  CreateUserIntoDB,
};
