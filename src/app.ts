import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './modules/students/students.routes'
import { UserRoutes } from './modules/user/user.routes'
import globalErrorHandler from './middlewares/globalErrorHandler'


const app:Application = express()
const port = 3000

app.use(express.json())
app.use(cors())


app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/user', UserRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello Worldfadfwed! g fgf  jahid')
})



app.use(globalErrorHandler)

export default app;
