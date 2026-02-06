import { Request, Response } from "express";
import { UserServices } from "./user.services";



const CreateUser = async (req: Request, res: Response) => {
  try {
    const {password, student} = req.body 
    const result = await UserServices.CreateUserIntoDB(password,student)
   
    res.status(200).json({
    success:true,
    message:"User created Successfully",
    data:result
   })

  } catch (error) {

  }
};


export const UserController={
  CreateUser,

}