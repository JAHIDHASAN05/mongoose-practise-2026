import AppError from "../../error/AppError";
import { Student } from "./students.interface";
import { studentModel } from "./students.model";

const createStudentIntoDB = async (student: Student) => {
  // const result = await studentModel.create(student);
  const studentData = new studentModel(student);

  const isExist = await studentData.isUserExist(student.id);
  console.log({ isExist });
  if (isExist) {
    throw new Error("User Already exist");
  }
  const result = await studentData.save();
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



const getSingleStudentFromDB = async (studentId: string) => {
  const result = await studentModel
    .findById(studentId)
    .populate("admissionSemister").populate({
      path:"academicDepartment",
      populate:{
        path:"academicFaculty"
      }
      
    })
  if (!result) {
    throw new AppError(404, "This student does not exist");
  }
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  try {
    const result = await studentModel.updateOne({ id }, { isDelated: true });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
