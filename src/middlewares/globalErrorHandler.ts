import {  NextFunction, Request, Response } from 'express'


const globalErrorHandler=(error:any, req:Request, res:Response,next:NextFunction)=>{
let message=error.message ||"Something went wrong"
let statusCode=500
 return res.status(statusCode).json({
    success:false,
    message,
    error,
  })

}

export default globalErrorHandler;