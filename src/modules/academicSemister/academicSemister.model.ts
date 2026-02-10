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
  year: { type: Date },
  startMonth: { type: String, enum: ALL_MONTHS },
  endMonth: { type: String, enum: ALL_MONTHS },
});

export const academicSemisterModel = model<TAcademicSemister>(
  "academic semister",
  AcademicSemisterSchema,
);
