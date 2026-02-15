import { z } from "zod";
const preRequisiteCoursesValidationSchema = {
  course: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
  isDeleted: z.boolean().default(false).optional(),
};
const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(255).trim(),
    prefix: z.string(),
    code: z.number().int().positive(),
    credits: z.number().positive(),
    preRequisiteCourses: z
      .array(z.object(preRequisiteCoursesValidationSchema))
      .optional(),
  }),
});

export const courseValidation = {
  createCourseValidationSchema,
  preRequisiteCoursesValidationSchema
};
