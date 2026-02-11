import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";

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

export const academicDepartment = model(
  "academicDepartment",
  academicDepartmentSchema,
);
