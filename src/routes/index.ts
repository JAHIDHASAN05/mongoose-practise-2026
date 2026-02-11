import { Router } from "express";
import { StudentRoutes } from "../modules/students/students.routes";
import { UserRoutes } from "../modules/user/user.routes";
import { academicRoutes } from "../modules/academicSemister/academicSemister.routes";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";

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
    },
    {
        path:'/academic-faculty',
        route:academicFacultyRoutes
    },
    {
        path:'/academic-department',
        route:academicFacultyRoutes
    }
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router

