import { Router } from "express"
import validate from "../../common/middleware/validate.middleware.js"
import registerDto from "./dto/register.dto.js"
import * as controller from "./auth.controller.js"
import loginDto from "./dto/login.dto.js"

const router = Router()

router.post("/register", validate(registerDto), controller.register)

router.post("/login", validate(loginDto))
export default router