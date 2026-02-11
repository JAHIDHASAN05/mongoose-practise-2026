import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicDepartmentServices } from "./academicDepartment.services";

const createAcademicDepartmeent= catchAsync(async(req,res)=>{
    const result= await academicDepartmentServices.createAcademicDepartmeentIntoDB(req.body)
 sendResponse(res,{
    statusCode:200,
    success:true,
    message:"academic deparment is created successfullly",
    data:result
 })
})

export const academicDepartmentController={
    createAcademicDepartmeent
}