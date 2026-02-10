import express from "express";
import { academicSemisterController } from "./academicSEmister.controller";

const router= express.Router()

router.post('/create-academic-semister', academicSemisterController.createAcademicSemister )

export const academicRoutes= router