import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './modules/students/students.routes'
import { UserRoutes } from './modules/user/user.routes'
import globalErrorHandler from './middlewares/globalErrorHandler'
import notFound from './middlewares/notFound'
import router from './routes'


const app:Application = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/api/v1/', router)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello Worldfadfwed! g fgf  jahid')
})


app.use(notFound)
app.use(globalErrorHandler)

export default app;
