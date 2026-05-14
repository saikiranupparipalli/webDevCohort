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
  verificationToken: { type: String, select: false },//used to 
  refreshToken: { type: String, select: false },//sent to user for login
  resetPasswordToken: { type: String, select: false },// link sent to user which checks the user is exists, verified in db and if yes, the link will redirect the user to /newpassword endpoint.
  resetPasswordExpires:{type: Date, select: false}//link(email) sent to user which expires after sometime
},{timestamps: true})

export default mongoose.model("User", userSchema)