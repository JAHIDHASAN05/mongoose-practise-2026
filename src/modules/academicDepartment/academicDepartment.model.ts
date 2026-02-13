import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import AppError from "../../error/AppError";

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: [true, "Academic department name is required"],
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: "academicFaculty",
    required: [true, "Academic faculty Id is required"],
  },
},{
    timestamps:true
}
);

academicDepartmentSchema.pre('save', async function(){

  const isDepartmentExist= await academicDepartment.find({name:this.name})
  if(isDepartmentExist){
    throw new AppError(404, "this department already exist")
  }

})

export const academicDepartment = model(
  "academicDepartment",
  academicDepartmentSchema,
);
