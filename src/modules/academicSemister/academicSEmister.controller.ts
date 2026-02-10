import { NextFunction, Request, Response } from "express";
import { academicSemisterServices } from "./academicSemister.services";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createAcademicSemister = catchAsync(
  async (req, res) => {
    const data = req.body;
    console.log({ academic: req });
    const result =
      await academicSemisterServices.createAcademicSemisterIntoDB(data);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Academic semister created successfully",
      data: result,
    });
  },
);

export const academicSemisterController = {
  createAcademicSemister,
};
