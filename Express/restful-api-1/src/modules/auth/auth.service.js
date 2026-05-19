import User from "./auth.model.js";
import ApiError from "../../common/utils/api-error.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../../common/utils/jwt.utils.js";

const hashToken = (token) =>
  crypto.createhash("sha256").update(token).digest("hex");

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

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw ApiError.unauthorized("invalid email or password");

  if (!user.isVerfied) {
    throw ApiError.forbidden("please verify email before loginIn");
  }

  const accessToken = generateAccessToken({
    email: user.email,
    role: user.role,
    id: user._id,
  });
  const refreshToken = generateRefreshToken({ id: user._id });

  user.refreshToken = hashToken(refreshToken);

  await user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;

  return { user: userObj, accessToken, refreshToken };
};

// refreshtoken generation
const refresh = async (token) => {
  if (!token) {
    throw ApiError.unauthorized("Refresh token is missing.");
  }
  const decoded = verifyRefreshToken(token);

  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user) throw ApiError.unauthorized("user not found.");

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
    email: user.email,
  });
  const hashtoken = crypto.createhash("sha256").update(token).digest("hex");
  const refreshToken = generateAccessToken(hashToken);

  return { accessToken, refreshToken };
};

// forgotPassword
const forgotPassword = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw ApiError.notfound("user account not found");

  const { rawToken, hashedToken } = generateResetToken();

  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
  await user.save();
};

const logOut = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw ApiError.forbidden("User not found");
  }
  await refreshToken.deleteMany({ userId: user._id });
};

export { register, login, refresh, forgotPassword, logOut};
