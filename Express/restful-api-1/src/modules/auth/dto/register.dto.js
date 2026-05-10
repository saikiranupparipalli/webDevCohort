import Joi from "joi"
import baseDto from "../../../common/Dto/dto.js";

class registerDto extends baseDto{
  static schema = Joi.object({
    name: Joi.string().min(2).max(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(7).max(14).required().message("password must contains atleast 7 chars."),
    role: Joi.string().valid("customer", "seller").default("customer")
  })
}

export default registerDto