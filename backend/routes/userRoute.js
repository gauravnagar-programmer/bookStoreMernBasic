import Router from "express"
import { signup } from "../controllers/SignupController.js"
import { loginValidation, signupValidation } from "../middleware/userValidation.js"
import { login } from "../controllers/loginController.js"

const route = Router()


route.post('/signup',signupValidation,signup)
route.post('/login',loginValidation,login)

export default route