import express from "express";

import { academicDepartmentController } from "../academicDepartment/academicDepartment.controller";

const router= express.Router()
router.post('/create-academic-department', academicDepartmentController.createAcademicDepartmeent)

export const academicFacultyRoutes=router;