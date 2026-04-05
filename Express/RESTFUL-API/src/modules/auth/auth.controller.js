import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utiles/api-response.js"
import { get } from "mongoose"

const register = async (req, res) => {
  const user = await authService.register(req.body)
  ApiResponse.created(res, "registration success", user)
}

const login = async (req, res) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body)
  
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 *60 * 1000,
   })
  
  ApiResponse.ok(res, "Login successful",{ user, accessToken } )
}

const logout = async (req, res) => {
  await authService.logOut(req.user.id)
  res.clearCookie("refreshToken")
  ApiResponse.ok(res, "Logout success")
}

const getMe = async (req, res) => {
  const user = await authService.getMe(req.user.id)
  ApiResponse.ok(res, "User Profile", getMe)
}

export   {register, login, logout}