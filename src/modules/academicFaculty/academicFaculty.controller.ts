import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicFacultySerivices } from "./academicFaculty.services";

const createAcademicFaculty=catchAsync(async(req,res)=>{
     const result= await academicFacultySerivices.createAcademicFacultyIntoDB(req.body)
     sendResponse(res, {
        statusCode:200,
        success:true,
        message:"Academic faculty created successfully",
        data:result
     })
})

export const academicFacultyController={
    createAcademicFaculty
}