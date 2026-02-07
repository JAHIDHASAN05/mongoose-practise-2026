import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student } = req.body;
    const result = await UserServices.CreateUserIntoDB(password, student);

  

    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "User created Successfully",
      data: result,
    });
  } catch (error) {
    console.log({ errorJahid: error });
    next(error);
  }
};

export const UserController = {
  CreateUser,
};
