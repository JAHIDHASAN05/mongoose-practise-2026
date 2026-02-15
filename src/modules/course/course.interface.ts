import { Types } from "mongoose";

export type TPreRequisiteCourse={
    course:Types.ObjectId,
    isDelated:boolean
}
export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: TPreRequisiteCourse[];
};
