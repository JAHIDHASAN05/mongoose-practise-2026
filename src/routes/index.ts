import { Router } from "express";
import { StudentRoutes } from "../modules/students/students.routes";
import { UserRoutes } from "../modules/user/user.routes";
import { academicRoutes } from "../modules/academicSemister/academicSemister.routes";

const router= Router()

const moduleRoutes=[
    {
        path:'/students',
        route:StudentRoutes,
    },
    {
        path:'/user',
        route:UserRoutes
    },
    {
        path:'/academic-semisters',
        route:academicRoutes
    }
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router

