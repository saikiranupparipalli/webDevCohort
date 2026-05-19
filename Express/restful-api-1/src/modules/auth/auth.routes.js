import { Router } from "express";
import validate from "../../common/middleware/validate.middleware.js";
import registerDto from "./dto/register.dto.js";
import * as controller from "./auth.controller.js";
import loginDto from "./dto/login.dto.js";
import { authenticate } from "./auth.midlleware.js";

const router = Router();

router.post("/register", validate(registerDto), controller.register);
router.post("/login", validate(loginDto));
router.post("/logout", authenticate, controller.logOut);
router.get("/getme", authenticate, controller.getMe);
export default router;
