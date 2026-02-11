import { Request } from "express";
import catchAsync from "../../utils/catchAsync";
import { academicSemisterModel } from "./academicSemister.model";
import { TAcademicSemister } from "./academicSemister.interface";
import { academicSemisterNameCodeMapper } from "./academicSemister.constant";
import { Types } from "mongoose";

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {
  if (academicSemisterNameCodeMapper[payload?.name] != payload.code) {
    throw new Error("Semister code does not match!!");
  }

  const result = await academicSemisterModel.create(payload);
  return result;
};

const getAllAcademicSemisterFromDB = async()=>{
      const result= await academicSemisterModel.find()
      return result
}

const getSingleAcademicSemisterFromDB=async(id:string)=>{
    const result = await academicSemisterModel.findOne({ 
    _id: new Types.ObjectId(id) 
  });
    if(!result){
      throw new Error('This semister does not exist')
    }

      return result
}
export const academicSemisterServices = {
  createAcademicSemisterIntoDB,
  getAllAcademicSemisterFromDB,
  getSingleAcademicSemisterFromDB
};
