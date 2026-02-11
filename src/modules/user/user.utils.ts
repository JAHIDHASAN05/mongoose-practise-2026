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

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};
export const generateStudentId = async (payload: TAcademicSemister) => {
  let currentId = await findLastStudentId(payload.year, payload.code)|| '0';

  let incrementId = (Number(currentId || 0) + 1).toString().padStart(4, "0");
  incrementId=`${payload?.year}${payload?.code}${incrementId}`
  console.log({payload});
  return incrementId

};
