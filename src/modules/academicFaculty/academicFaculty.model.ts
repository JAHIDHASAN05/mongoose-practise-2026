import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFecultySchema= new Schema<TAcademicFaculty>({
    name:{type:String, required:true}
},{
    timestamps:true
})

export const academicFaculty= model<TAcademicFaculty>('academicFaculty', academicFecultySchema)