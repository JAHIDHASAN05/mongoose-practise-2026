import {  Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";



const CreateUser = catchAsync(async (req: Request, res: Response) => {
  const { password, student } = req.body;
  const result = await UserServices.CreateUserIntoDB(password, student);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User created Successfully",
    data: result,
  });
});

export const UserController = {
  CreateUser,
};
