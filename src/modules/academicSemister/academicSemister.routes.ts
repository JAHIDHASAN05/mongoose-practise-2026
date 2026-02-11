import express from "express";
import { academicSemisterController } from "./academicSEmister.controller";
import ValidateReqest from "../../middlewares/validateRequest";
import { academicSemisterValidations } from "./academicSemister.vaildation";

const router = express.Router();

router.post(
  "/create-academic-semister",
  ValidateReqest(
    academicSemisterValidations.createAcademicSemisterValidationSchema,
  ),
  academicSemisterController.createAcademicSemister,
);
router.get('/get-all-academic-semister', academicSemisterController.getAllAcademicSemister)
router.get('/:id', academicSemisterController.getSingleAcademicSemister)

export const academicRoutes = router;
