import { model, Schema } from "mongoose";
import { TCourse, TPreRequisiteCourse } from "./course.interface";

const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourse>({
  course: { type: Schema.Types.ObjectId, required: true },
  isDelated: { type: Boolean ,default:false},
});
const CourseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: [true, "Course title is required"],
    trim: true,
    unique: true,
  },
  code: { type: Number, required: [true, "Course Code is requried"] },
  credits: { type: Number, required: [true, "Couse number is required"] },
  prefix: { type: String, required: [true, "Course prefix is required"] },
  preRequisiteCourses: [preRequisiteCoursesSchema],
});

export const course = model<TCourse>("Course",CourseSchema )