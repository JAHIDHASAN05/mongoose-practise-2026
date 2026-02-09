import express, { NextFunction, Request, RequestHandler, Response } from 'express'
import { UserController } from './user.controller'

import { studentValidationSchema } from '../students/students.validation'
import ValidateReqest from '../../middlewares/validateRequest'

const router= express.Router()




router.post('/create-student',ValidateReqest(studentValidationSchema), UserController.CreateUser)



export const UserRoutes= router