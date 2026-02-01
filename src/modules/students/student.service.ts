import { Student } from "./students.interface";
import { studentModel } from "./students.schema";

const createStudentIntoDB= async(student:Student)=>{
   const result=  await studentModel.create(student)
   return result

}

const getAllStudentFromDB =async()=>{
    const result = await studentModel.find()
    return result;
}

export const StudentServices ={
    createStudentIntoDB,
    getAllStudentFromDB
}