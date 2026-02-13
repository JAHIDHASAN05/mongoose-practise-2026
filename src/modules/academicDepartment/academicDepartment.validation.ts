import z from "zod";

const createAcademicDepartmeentValidationSchema=z.object({
    body:z.object({
        name:z.string(),
        academicFaculty:z.string(),
    })
})

export const academicDepartmentValidation={
    createAcademicDepartmeentValidationSchema
}