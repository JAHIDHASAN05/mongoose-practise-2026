import express from "express";
import { StudentControllers } from "./students.controller";
const router = express.Router();
router.post("/create-student", StudentControllers.createStudent);
router.get("/get-all-student", StudentControllers.getAllStudent);
router.get("/:id", StudentControllers.getSingleStudent);
router.delete("/:id", StudentControllers.deleteStudent);


export const StudentRoutes= router