import { Student } from "./students.interface";
import { studentModel } from "./students.model";

const createStudentIntoDB = async (student: Student) => {
  // const result = await studentModel.create(student);
  const studentData= new studentModel(student)

  const isExist =await studentData.isUserExist(student.id)
  console.log({isExist});
if(isExist){
 throw new Error('User Already exist')
}
  const result= await studentData.save()
  return result;
};

const getAllStudentFromDB = async () => {
  try {
    const result = await studentModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudentFromDB = async(studentId:string)=>{
    try {
        const result= await studentModel.findOne({id:studentId})
        return result
    } catch (error) {
        console.log(error);
        
    }
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB
};
