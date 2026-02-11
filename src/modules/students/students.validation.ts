import { z } from "zod";

/* ---------------- user name ---------------- */

export const userNameValidationSchema = z.object({
  first_name: z
    .string()
    .min(1, "first name is required")
    .trim()
    .max(20, "first name max length should not be more than 20")
    .refine(
      (value) => {
        const capitalized =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return value === capitalized;
      },
      {
        message: "first name must be capitalized properly",
      },
    ),

  middle_name: z.string().min(1, "middle name is required"),

  last_name: z.string().min(1, "last name is required"),
});

/* ---------------- guardian ---------------- */

export const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherContactNo: z.string().min(1),
  fatherOccupation: z.string().optional(),

  motherName: z.string().min(1),
  motherContactNo: z.string().min(1),
  motherOccupation: z.string().optional(),
});

/* ---------------- student ---------------- */

export const studentValidationSchema = z.object({
  body: z.object({    
    password: z.string().max(20),
    student: z.object({
      email: z.email(),
      name: userNameValidationSchema,
      contactNumber: z.string().min(1),
      emergencyContactNumber: z.string().min(1),
      admissionSemister:z.string().optional(),
      presentAddress: z.string().min(1).optional(),
      permanentAddress: z.string().min(1).optional(),

      bloodGroup: z.enum(["A+", "B+", "AB+", "O+"]),

      gender: z.enum(["female", "male"]),

      profileImage: z.url().optional(),

      gurdian: guardianValidationSchema,
    }),
  }),
});
