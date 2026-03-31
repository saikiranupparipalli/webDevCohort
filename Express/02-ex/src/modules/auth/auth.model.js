import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 50,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "passoword is required"],
    minlength: 8,
    maxlength: 45,
  },
  role: {
    type: String,
    enum: ["customer", "seller", "admin"],
    default: "customer"
  },
  isVerified: {
    type: Boolean,
    defalut: false
  },
  
  verificationToken: {type: String, select: false}
})

export default mongoose.model("User", userSchema)