import { TCourse } from "./course.interface";
import { course } from "./course.model";

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await course.create(payload);
  return result;
};

const getAllCouresFromDB=async()=>{
    const result= await course.find()
    return result
}

const getSingleCoursesFromDB=async(id:string)=>{
     const result= await course.findById(id)
     return result
}
export const courseServices = {
  createCourseIntoDB,
  getAllCouresFromDB,
  getSingleCoursesFromDB
};
