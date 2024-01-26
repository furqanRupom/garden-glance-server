import express from "express"
import { flowersRoutes } from "../modules/flowers/flowers.routes";
import { authRoutes } from "../modules/auth/auth.routes";


const router = express.Router();


const modulesRoutes = [
  {
    path:"/flowers",
    route:flowersRoutes
  },
  {
    path:"/auth",
    route:authRoutes
  }
]

modulesRoutes.forEach(({path,route}) => router.use(path,route))

export default router;