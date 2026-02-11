import express from "express";

import { academicDepartmentController } from "../academicDepartment/academicDepartment.controller";
import { academicFacultyController } from "./academicFaculty.controller";

const router= express.Router()
router.post('/create-academic-faculty', academicFacultyController.createAcademicFaculty)

export const academicFacultyRoutes=router;