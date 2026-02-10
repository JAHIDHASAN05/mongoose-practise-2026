import { model, Schema } from "mongoose";
import {
  TAcademicSemister,
  TAcademicSemisterCode,
  TAcademicSemisterName,
} from "./academicSemister.interface";

export const ALL_MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

export const AcademicSemisterName: TAcademicSemisterName[] = [
  "autumn",
  "summer",
  "winter",
];

export const AcademicSemisterCode: TAcademicSemisterCode[] = ["01", "02", "03"];
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
