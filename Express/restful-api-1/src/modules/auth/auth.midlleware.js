import ApiError from "../../common/utils/api-error.js";
import { verifyAccessToken } from "../../common/utils/jwt.utils.js";
 
const authenticate = async(req, res, next)=>{
    const token = req.headers.authorization?.startsWith("Bearer")//startwith(string method)
    if(token){
        req.headers.authorization.split(" ")[1]
    }
    if(!token) throw ApiError.unauthorized("not authenticated")
    const decoded = verifyAccessToken(token)

    const user = await User.findById(decoded.findById)
    if(!user) throw ApiError.unauthorized("user no longer exist")
    
    req.user = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    next()
}
const authorize = async(...roles)=>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            throw ApiError.forbidden("you dont have permission to access..!")
        }
    }
    next()
}
export {authenticate, authorize}