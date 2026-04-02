class ApiError extends Error {
  
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "Bad request") {
    return new ApiError(404, message);
  }

  static unauthorized(message = "unauthorized") {
    return new ApiError(404, message);
  }
  static conflict(message = "conflict- User already exist") {
    return new ApiError(409, message);
  }
  static forbidden(message = "forbidden") {
    return new ApiError(412, message);
  }
  static notfound(message = "notfound") {
    return new ApiError(412, message);
  }
}
export default ApiError;
