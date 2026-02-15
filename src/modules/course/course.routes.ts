import express from "express";
import { courseController } from "./course.controller";
import ValidateReqest from "../../middlewares/validateRequest";
import { courseValidation } from "./course.validation";

const router= express.Router()
router.post('/create-course', ValidateReqest(courseValidation.createCourseValidationSchema), courseController.createCourse)


export const courseRoutes= router