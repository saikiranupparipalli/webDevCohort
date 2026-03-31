import joi from "joi";
import baseDto from "../../../common/dto/base.dto.js";

class RegisterDto extends baseDto {
  static schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    role: joi.string().valid("customer", "seller").default("customer")
  });
  
}

export default RegisterDto