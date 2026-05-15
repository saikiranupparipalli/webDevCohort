import Joi from "Joi"
import baseDto from "../../../common/Dto/dto.js"
import { forgotPassword } from "../auth.service.js"

 class loginDto  extends baseDto{
    static schema = Joi.Object({
        email: Joi.string().lowerCase().required(),
        password: Joi.string().required().min(8).max((12))
})
 }
export default loginDto
