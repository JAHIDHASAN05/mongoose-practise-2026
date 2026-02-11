import { NextFunction } from "express";
import { Student } from "../students/students.interface";
import { studentModel } from "../students/students.model";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";
import { generateStudentId } from "./user.utils";
import { academicSemisterModel } from "../academicSemister/academicSemister.model";
import { Types } from "mongoose";

const CreateUserIntoDB = async (password: string, student: Student) => {
  let user: Partial<TUser> = {
    password: password || "JahidDefaultPassword",
    id: "adasdfadfadf",
    role: "student",
  };

  const admissionSemister = await academicSemisterModel.findOne({
    _id: new Types.ObjectId(student.admissionSemister),
  });
  console.log(student);
  console.log({ admissionSemister });
  console.log({ admissionSemister: student.admissionSemister });
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
