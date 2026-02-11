
import { academicSemisterModel } from "./academicSemister.model";
import { TAcademicSemister } from "./academicSemister.interface";

import { Types } from "mongoose";
import { academicSemisterNameCodeMapper } from "./academicSemister.constant";

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {

  console.log(payload,academicSemisterNameCodeMapper[payload?.code]);
  if (academicSemisterNameCodeMapper[payload?.name] != payload.code) {
    throw new Error("Semister code does not match!!");
  }

  const result = await academicSemisterModel.create(payload);
  return result;
};

const getAllAcademicSemisterFromDB = async () => {
  const result = await academicSemisterModel.find();
  return result;
};

const getSingleAcademicSemisterFromDB = async (id: string) => {
  const result = await academicSemisterModel.findOne({
    _id: new Types.ObjectId(id),
  });
  if (!result) {
    throw new Error("This semister does not exist");
  }
  return result;
};



export const academicSemisterServices = {
  createAcademicSemisterIntoDB,
  getAllAcademicSemisterFromDB,
  getSingleAcademicSemisterFromDB,
};
