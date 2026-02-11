import express from "express"
import { academicDepartmentController } from "./academicDepartment.controller"

const router= express.Router()

router.post('/create-academic-department', academicDepartmentController.createAcademicDepartmeent)

export const academicDepartmentRoutes= router;