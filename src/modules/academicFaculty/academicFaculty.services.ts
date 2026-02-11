
import { TAcademicFaculty } from "./academicFaculty.interface";
import { academicFaculty } from "./academicFaculty.model";

const createAcademicFacultyIntoDB=async(payload:TAcademicFaculty)=>{
    const isFecultyExist= await academicFaculty.findOne({
        name:payload.name
    })
    if(isFecultyExist){
        throw new Error('This faculty is already rexist')
    }
    const result = await academicFaculty.create(payload)
    return result;
}

export const academicFacultySerivices={
    createAcademicFacultyIntoDB
}