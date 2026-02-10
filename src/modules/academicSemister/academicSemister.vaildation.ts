import { z } from "zod";
import { AcademicSemisterCode, AcademicSemisterName } from "./academicSemister.constant";

const createAcademicSemisterValidationSchema = z.object({
  body: z.object({
    name: z.enum(AcademicSemisterName),
    code:z.enum(AcademicSemisterCode),
    year:z.Date()  
  }),
});
