import ApiError from "../utils/api-error.js";

const validate = (dtoClass) => {
  return (req, res, next) => {
    const { errors, value } = dtoClass.validate(req.body)
    if (errors) {
      throw ApiError.badRequest()
    }
    req.body = value
    next()
  }
}
// validate()

export default validate