import mongoose from "mongoose";
import AppError from "../../error/AppError";
import { Student } from "./students.interface";
import { studentModel } from "./students.model";
import { userModel } from "../user/user.model";

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

const getAllStudentFromDB = async (queary: Record<string, unknown>) => {
  const quaryObj = { ...queary };

  let searchTerm = "";
  if (queary.searchTerm) {
    searchTerm = queary.searchTerm as string;
  }
  const quearyField = ["email", "name.first_name", "address"];

  const searchQuary = studentModel.find({
    $or: quearyField.map((quary) => ({
      [quary]: { $regex: searchTerm, $options: "i" },
    })),
  });

  //filtering
  const exclueFields = ["searchTerm", "limit", "sort", "page","fields"];
  exclueFields.forEach((el) => delete quaryObj[el]);

  console.log({ exclueFields, quaryObj, queary });

  const filterQuary = searchQuary
    .find(quaryObj)
    .populate("admissionSemister")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });

  let limit = 10;
  if (queary.limit) {
    limit = Number(queary.limit);
  }

  const limitQuary = filterQuary.limit(limit);

  let sort = "-createdAt";
  if (queary.sort) {
    sort = queary.sort as string;
  }

  const sortQuary = limitQuary.sort(sort);
  let page = 1;
  let skip = 0;
  if (queary.page) {
    page = Number(queary.page);
    skip = (page - 1) * limit;
  }

  const paginationQuary = sortQuary.skip(skip);

  let fields='-_v'
  if(queary.fields){
    fields= (queary.fields as string).split(',').join(' ')
  }

  const fieldsQuary = await paginationQuary.select(fields);

  return fieldsQuary;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await studentModel
    .findOne({ id: studentId })
    .populate("admissionSemister")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  console.log({ id: studentId });
  if (!result) {
    throw new AppError(404, "This student does not exist");
  }
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const isUserExist = await userModel.find({ id }).session(session);

    if (!isUserExist.length) {
      throw new AppError(404, "this user does not exist");
    }
    const result = await studentModel.findOneAndUpdate(
      { id },
      { isDelated: true },
      { new: true, session },
    );
    console.log({ result });
    if (!result) {
      throw new AppError(404, "student deleting false");
    }

    const userResult = await userModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    console.log({ userResult });
    if (!userResult?.isDeleted) {
      throw new AppError(404, "user deleting false");
    }

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
