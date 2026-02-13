import express from "express";
import { academicDepartmentController } from "./academicDepartment.controller";
import ValidateReqest from "../../middlewares/validateRequest";
import { academicDepartmentValidation } from "./academicDepartment.validation";

const router = express.Router();

router.post(
  "/create-academic-department",
  ValidateReqest(
    academicDepartmentValidation.createAcademicDepartmeentValidationSchema,
  ),
  academicDepartmentController.createAcademicDepartmeent,
);
router.get("/", academicDepartmentController.getAllAcademicDepartment);
router.get("/:id", academicDepartmentController.getSingleAcademicDepartment);

export const academicDepartmentRoutes = router;
