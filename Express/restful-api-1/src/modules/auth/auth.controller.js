import * as authService from "./auth.service.js";
import ApiResponse from "../../common/utils/api-response.js";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  ApiResponse.created(res, "registration success", user);
};

const login = async (req, res) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body);

  const refreshCookie = res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  const accessCookie = res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  ApiResponse.ok(res, "Login successful", { accessCookie, refreshCookie });
};

const logOut = async (req, res) => {   
  const user = await authService.logOut(req.user.id)
  res.clearcookie("refreshToken")
  return ApiResponse.ok("Logout is successful", user)
}
const getMe = async (req, res) => {
  const user = await authService.getMe(req.user.id);
  ApiResponse.ok(res, "user profile", user);
};

// const verifyEmail = async (req, res) => {
//   const user = await authService.verifyEmail(req.user.email);
//   return ApiResponse.ok(res, "email verified", user);
// };

const verifyEmail = async (req, res) => {
  try {
    let token = req.params.token;
    await authService.verifyEmail(req.token);
    ApiResponse.ok(res, "email verified", token);
  } catch (error) {
    console.log("something went wrong in verifying email", error);
  }
};
export { register, login, logOut, getMe, verifyEmail };
