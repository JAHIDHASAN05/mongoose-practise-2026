import { Request } from "express";
import catchAsync from "../../utils/catchAsync";
import { academicSemisterModel } from "./academicSemister.model";
import { TAcademicSemister } from "./academicSemister.interface";

const createAcademicSemisterIntoDB = async (
  academicData: TAcademicSemister,
) => {
  const result = await academicSemisterModel.create(academicData);
  return result;
};

export const academicSemisterServices = {
  createAcademicSemisterIntoDB,
};
