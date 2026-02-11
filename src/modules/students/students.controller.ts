import { NextFunction, Request, response, Response } from "express";
import { StudentServices } from "./student.service";
import { studentValidationSchema } from "./students.validation";
import { success } from "zod";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import { error } from "node:console";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const student = req.body.student;

    const zodParseData = studentValidationSchema.parse(student);

    const result = await StudentServices.createStudentIntoDB(zodParseData);

    // res.status(200).json({
    //   success: true,
    //   message: "Student is created successfully",
    //   data: result,
    // });
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "User created Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "something went wrong1",
      error: error,
    });
  }
};

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "All student retreive successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.id as string;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Student deleted successsfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.id as string;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      massage: " student retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
