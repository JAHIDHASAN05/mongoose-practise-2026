import { TAcademicSemister } from "../academicSemister/academicSemister.interface";
import { userModel } from "./user.model";



 export const findLastStudentId = async (year: string, semesterCode: string) => {
  
  const searchTerm = `^${year}${semesterCode}`;

  const lastStudent = await userModel.findOne(
    {
      role: 'student',
      id: { $regex: searchTerm } 
    },
    {
      id: 1,
      _id: 0
    }
  )
  .sort({
    createdAt: -1 
  })
  .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};
export const generateStudentId = async (payload: TAcademicSemister) => {
  let currentId =  '0';
 const lastStudentId= await findLastStudentId(payload.year, payload.code) 
 const lastStudentSemisterCode= lastStudentId?.substring(4,6)
 const lastStudentSemisteryear=lastStudentId?.substring(0,4)
 const currentStudentSemisterCode=payload?.code
 const currentStudentSemisterYear=payload?.year


 if(lastStudentId && lastStudentSemisterCode ===currentStudentSemisterCode && lastStudentSemisteryear===currentStudentSemisterYear){
    currentId=lastStudentId.substring(6)
 }
  console.log({currentId});
  let incrementId = (Number(currentId || 0) + 1).toString().padStart(4, "0");
  incrementId=`${payload?.year}${payload?.code}${incrementId}`
  console.log({payload});
  return incrementId

};
