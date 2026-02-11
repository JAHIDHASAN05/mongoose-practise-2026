import { NextFunction, Request, Response } from "express";
import { academicSemisterServices } from "./academicSemister.services";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createAcademicSemister = catchAsync(async (req, res) => {
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
});

const getAllAcademicSemister = catchAsync(async (req, res) => {
  const result = await academicSemisterServices.getAllAcademicSemisterFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All academic semister retrive",
    data: result,
  });
});

export const academicSemisterController = {
  createAcademicSemister,
  getAllAcademicSemister
};
