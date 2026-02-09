import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodType } from "zod";

const ValidateReqest = (schema: ZodType): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default ValidateReqest;


