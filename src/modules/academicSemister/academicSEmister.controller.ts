import { NextFunction, Request, Response } from "express";
import { academicSemisterServices } from "./academicSemister.services";
import sendResponse from "../../utils/sendResponse";

const createAcademicSemister = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    console.log({academic:req});
    const result =         
      await academicSemisterServices.createAcademicSemisterIntoDB(data);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Academic semister created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export const academicSemisterController={
    createAcademicSemister
}