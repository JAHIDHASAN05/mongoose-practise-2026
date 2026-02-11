import z from "zod";

const CreateAcademicFacultyValidationSchema = z.object({
  body: {
    name: z.string(),
  },
});

export const academicFacultyValidation = {
  CreateAcademicFacultyValidationSchema,
};
