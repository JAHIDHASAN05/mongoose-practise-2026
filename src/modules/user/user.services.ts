import { NextFunction } from "express";
import { Student } from "../students/students.interface";
import { studentModel } from "../students/students.model";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const CreateUserIntoDB = async (
  password: string,
  student: Student,

) => {
  let user: Partial<TUser> = {
    password: password || "JahidDefaultPassword",
    id: "",
    role: "student",
  };

  user.id = Math.floor(100000 + Math.random() * 900000).toString();

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
