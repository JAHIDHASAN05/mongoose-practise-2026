import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import handleZodError from "../error/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let message = error.message || "Something went wrong";
  let statusCode = error.statusCode || 500;

  type TErrorSources = {
    path: string | number;
    message: string;
  }[];
  let ErrorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];



  if (error     instanceof ZodError) {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    ErrorSources = simplifiedError?.errorSources
  }
  return res.status(statusCode).json({
    success: false,
    message,
    ErrorSources,
    error

  });
};

export default globalErrorHandler;
