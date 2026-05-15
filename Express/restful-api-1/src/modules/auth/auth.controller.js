import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

const register = async (req, res) =>{
  const user = await authService.register(req.body)
  ApiResponse.created(res, "registration success", user)
}

const login = async(req, res)=>{
  const login = await authService.register(req.body)
  ApiResponse.c
}
export {register}