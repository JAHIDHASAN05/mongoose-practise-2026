import { model, Schema } from "mongoose";
import {
  TAcademicSemister,
} from "./academicSemister.interface";
import { AcademicSemisterCode, AcademicSemisterName, ALL_MONTHS } from "./academicSemister.constant";


const AcademicSemisterSchema = new Schema<TAcademicSemister>({
  name: {
    type: String,
    enum: AcademicSemisterName,
    required: [true, "academic name is required"],
    default: "summer",
  },
  code: { type: String, enum: AcademicSemisterCode
   , default: "01" },
  year: { type: String },
  startMonth: { type: String, enum: ALL_MONTHS },
  endMonth: { type: String, enum: ALL_MONTHS },
});



AcademicSemisterSchema.pre('save', async function (next){
  const isSemisterExist= await academicSemisterModel.findOne({
    name:this.name,
    year:this.year,
   
  })
  if(!!isSemisterExist){
    console.log({isSemisterExist});
    throw new Error('semister is already exist!!')
  }

})
export const academicSemisterModel = model<TAcademicSemister>(
  "academic semister",
  AcademicSemisterSchema,
);
