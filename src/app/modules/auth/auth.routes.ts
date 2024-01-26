import express from "express"
import validateRequest from "../../middleware/validateRequest";
import { authValidations } from "./auth.validation";
import { authController } from "./auth.controller";


const router = express.Router();


router.post('/register',validateRequest(authValidations.userValidationSchema),authController.createUser)

router.post('/login',validateRequest(authValidations.loginValidationSchema),authController.userLogin)


export const authRoutes = router;