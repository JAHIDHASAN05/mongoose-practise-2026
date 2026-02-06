import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";

const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student } = req.body;
    const result = await UserServices.CreateUserIntoDB(password, student);

    res.status(200).json({
      success: true,
      message: "User created Successfully",
      data: result,
    });
  } catch (error) {
    console.log({errorJahid:error});
    next(error);
  }
};

export const UserController = {
  CreateUser,
};
