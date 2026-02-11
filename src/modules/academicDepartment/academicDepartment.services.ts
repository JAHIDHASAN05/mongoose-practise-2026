import { TAcademicDepartment } from "./academicDepartment.interface";
import { academicDepartment } from "./academicDepartment.model";

const createAcademicDepartmeentIntoDB=async(payload:TAcademicDepartment)=>{
    const isDeparmentExist= await academicDepartment.findOne({name:payload.name})
    if(isDeparmentExist){
        throw new Error(`${payload.name} is already exist`)
    }
    const result= await academicDepartment.create(payload)
    return result
}

export const academicDepartmentServices={
    createAcademicDepartmeentIntoDB
}