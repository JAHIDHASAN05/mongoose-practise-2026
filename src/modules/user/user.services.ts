import { NextFunction } from "express";
import { Student } from "../students/students.interface";
import { studentModel } from "../students/students.model";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";
import { generateStudentId } from "./user.utils";
import { academicSemisterModel } from "../academicSemister/academicSemister.model";
import { Types } from "mongoose";
import AppError from "../../error/AppError";

const CreateUserIntoDB = async (password: string, student: Student) => {
  let user: Partial<TUser> = {
    password: password || "JahidDefaultPassword",
    id: "adasdfadfadf",
    role: "student",
  };

  const admissionSemister = await academicSemisterModel.findOne({
    _id: new Types.ObjectId(student.admissionSemister),
  });
  if (!admissionSemister) {
    throw new AppError(400, "admistion semister is not valid");
  }
  const academicDepartment = await academicSemisterModel.findOne({
    _id: new Types.ObjectId(student.academicDepartment),
  });

  if (!academicDepartment) {
    throw new AppError(400, "academic Department  is not valid");
  }

  user.id = await generateStudentId(admissionSemister);

  const result = await userModel.create(user);

  if (result._id) {
    ((student.id = result.id), (student.userId = result._id));

    const newStudent = await studentModel.create(student);

    return newStudent;
  }
};

export const UserServices = {
  CreateUserIntoDB,
};
