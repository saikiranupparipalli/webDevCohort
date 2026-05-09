import ApiError from "../../common/utiles/api-error.js"
import { generateAccessToken, generateResetToken, verifyRefreshToken } from "../../common/utiles/jwt.utils.js"
import User from "./auth.model.js"

const hashToken = (token) => crypto
  .createHash("sha256")
  .update(token)
  .digest("hex");

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
}


  const login = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password")
    if (!user) throw ApiError.unauthorized("Invalid user or password")
    
    const isMatch = await user.comparePassword(password)
    if (!isMatch) throw ApiError.unauthorized("Invalid email or password")
    
    if (!user.isVerified) {
      throw ApiError.forbidden("Please verify your email before logging.")
    }
    
    const accessToken = generateAccessToken({ id: user._id })
    const refreshToken = generateResetToken({ id: user._id })
    
    user.refreshToken = hashToken(refreshToken)
    await user.save({ validateBeforeSave: false })
    
    const userObj = user.toObject()
    delete user.Obj.password
    delete userObj.refreshToken
    
    return {user: userObj, accessToken, refreshToken}
   }

const refresh = async (token) => {
  if (!token) throw ApiError.unauthorized("Refresh token missing")
  const decoded = verifyRefreshToken(token)
  
  const user = await User.findById(decoded.id).select("+refreshToken")
  if (!user) throw ApiError.unauthorized("User not found.")
  
  if (user.refreshToken !== hashToken(token)) {
    throw ApiError.unauthorized("Invalid refresh token")
  }
  
  const accessToken = generateAccessToken({ id: user._id, role: user.role })
  return { accessToken }
  
}

const logOut = async (userId) => {
  await User.findByIdAndUpdate(userId, {refreshToken: null})
}

const forgotPassword = async (email) => {
  const user = await User.findOne({ email })
  if (!user) throw ApiError.notfound("No account with the given email")
  
  const { rawToken, hashToken } = generateAccessToken()
  user.resetPasswordExpires = hashToken
  user.resetPasswordExpires = Date.now() + 15 * 60 * 1000
  
  await user.save()
}

const verifyEmail = async (token) => {
  const hashedToken = hashToken(token)
  const user = await User.findOne({ verificationToken: hashedToken }).select("+verificationToken")
  
  user.isVerified = true
  user.verificationToken = undefined
  await user.save()
  return user;
}
const getMe = async (userId) => {
  const user = await User.findById(userId)
  if (!user) throw ApiError.notfound("User not found")
  return user;
}
export { register, login, refresh, forgotPassword, logOut, verifyEmail}