import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { courseServices } from "./course.services";

const createCourse=catchAsync(async(req,res)=>{
     const payload= req.body
     const result= await courseServices.createCourseIntoDB(payload)
     sendResponse(res,{
        statusCode:400,
        success:true,
        message:"Course created success fully",
        data:result
     })
})

export const courseController={
    createCourse
}