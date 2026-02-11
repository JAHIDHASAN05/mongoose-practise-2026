import express from "express";
import { academicFacultyController } from "./academicFaculty.controller";

const router= express.Router()
router.post('/create-academic-faculty', academicFacultyController.createAcademicFaculty)

export const academicFacultyRoutes=router;