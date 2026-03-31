import ApiError from "../../common/utiles/api-error.js"
import { generateResetToken } from "../../common/utiles/jwt.utils.js"
import User from "./auth.model.js"

const register = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email })
  if (existing) throw ApiError.conflict("Email already exists")
  
  const { rawToken, hashedToken } = generateResetToken()
  const user = await User.create({
    name: name,
    email: email,
    password: password,
    role: role,
    verificationToken: hashedToken
  })
  
  // const userObj = user.toObject()
  // delete userObj.password
  // return userObj
}

export default register