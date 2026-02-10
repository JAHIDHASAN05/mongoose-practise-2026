import { z } from "zod";
import { AcademicSemisterCode, AcademicSemisterName, ALL_MONTHS } from "./academicSemister.constant";

const createAcademicSemisterValidationSchema = z.object({
  body: z.object({
    name: z.enum(AcademicSemisterName),
    code:z.enum(AcademicSemisterCode),
    year:z.string(),
    startMonth:z.enum(ALL_MONTHS),
    endMonth:z.enum(ALL_MONTHS) 
  }),
});

export const academicSemisterValidations={
  createAcademicSemisterValidationSchema
}