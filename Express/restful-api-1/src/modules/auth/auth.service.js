import User from "./auth.model.js"
import ApiError from "../../common/utils/api-error.js"
import { generateResetToken } from "../../common/utils/jwt.utils.js"

const register = async ({ name, email, password, role }) => {
  const existingUser = await User.findOne({ email })
  if (existingUser) ApiError.conflict("User already exists.")

  const { rawToken, hashedToken } = generateResetToken()

  const user = await User.create({
    name, 
    email,
    password,
    role,
    verificationToken: hashedToken
  })
}
export {register}