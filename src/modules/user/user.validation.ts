import z from "zod";

const userValidationSchema = z.object({
  password: z
    .string({
      error: "password must be string",
    })
    .max(20, { message: "Password cannot be more than 20 character" })
    .min(6, { message: "Password cannot be less than 6 character" })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
