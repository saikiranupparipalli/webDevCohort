import joi from "joi"

class baseDto {
  static schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required()
  })
  
  static validate(data) {
    const { errors, value } = this.schema.validate(data, {
      abortEarly: false,
      stripUnknown: true
    })
    if (errors) {
      const errors = errors.details.map((d) => d.message)
      return { errors, value: null }
    }
    
    return { errors: null, value }
  }
}



export default baseDto