import  mongoose  from "mongoose";

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI)
  console.log(`MongooseDb connected ${connection.connection.host}`)
}
export default connectDb