import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 50,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    trim: true,
    required: [true, "email is required"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 7,
    maxlength: 50,
    required: [true, "password is required"]
  },
  role: {
    type: String,
    enum: ["customer", "seller", "admin"],
    default: "customer"
  },
  isVerfied: {
    type: Boolean,
    default: false
  },
  verificationToken: { type: String, select: false },
  refreshToken: { type: String, select: false },
  resetPasswordToken: { type: String, select: false },
  resetPasswordExpires:{type: Date, select: false}
},{timeseries: true})

export default mongoose.model("User", userSchema)