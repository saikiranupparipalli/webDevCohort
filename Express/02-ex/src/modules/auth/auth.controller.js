import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utiles/api-response.js"

const register = async (req, res) => {
  const user = await authService.register(req.body)
  ApiResponse.created(res, "registration success", user)
}

export default register