import User from "./auth.model.js";
import ApiError from "../../common/utils/api-error.js";
import { generateAccessToken, generateRefreshToken} from "../../common/utils/jwt.utils.js";

const hashToken = (token)=> crypto.createhash("sha256").update(token).digest("hex")

const register = async ({ name, email, password, role }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) ApiError.conflict("User already exists.");

  const { rawToken, hashedToken } = generateResetToken();

  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });
};
//login
const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("++password");
  if (!user) throw ApiError.unauthorized("wrong email or password");

  if (!user.isVerfied) {
    throw ApiError.forbidden("please verify email before loginIn");
  }

  const accessToken = generateAccessToken({email: user.email, role:user.role, id: user._id})
  const refreshToken = generateRefreshToken({id:user._id})

  user.refreshToken = hashToken(refreshToken)

  await user.save({validateBeforeSave: false})

  const userObj = user.toObject()
  delete userObj.password
  delete userObj.refreshToken

  return {user: userObj, accessToken, refreshToken}
};
export { register };
