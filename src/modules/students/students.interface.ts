import { Model, ObjectId, Types } from "mongoose";

export type Gurdian = {
  fatherName: string;
  motherName: string;
  fatherOccupation?: string;
  motherOccupation?: string;
  fatherContactNo: string;
  motherContactNo: string;
};

export type UserName = {
  first_name: string;
  middle_name: string;
  last_name: string;
};

export type Student = {

  id: string;
  name: UserName;
  userId:Types.ObjectId,
  admissionSemister:Types.ObjectId,
  email: string;
  gender: "male" | "female";
  dateOfBirth?: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: "A+" | "B+" | "O+" | "AB+";
  presentAddress?: string;
  permanentAddress?: string;
  gurdian: Gurdian;
  profileImage?: string;
  isActive: "active" | "inactive";
  isDelated:boolean
};


export type StudentMethods ={
  isUserExist(id:string):Promise<Student |null>
}

export type StudentModel =Model<Student,Record<string, never>, StudentMethods>