import { Request, response, Response } from "express";
import { StudentServices } from "./student.service";
import { studentValidationSchema } from "./students.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
  
    const zodParseData= studentValidationSchema.parse(student)

    

    const result = await StudentServices.createStudentIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error?.message || "something went wrong1",
      error: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "All student retreive successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id as string;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      massage: " student retrieve successfully",
      data: result,
    });
  } catch (err) {
     res.status(500).json({
      success: false,
      massage: "something went wrong",
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
