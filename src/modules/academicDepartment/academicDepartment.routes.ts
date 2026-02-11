import express from "express"
import { academicDepartmentController } from "./academicDepartment.controller"

const router= express.Router()

router.post('/create-academic-department', academicDepartmentController.createAcademicDepartmeent)
router.get('/', academicDepartmentController.getAllAcademicDepartment)
router.get('/:id', academicDepartmentController.getSingleAcademicDepartment)

export const academicDepartmentRoutes= router;