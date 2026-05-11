import mongoose from "mongoose";
import "dotenv/config";

console.log(process.env.MONGODB_URI);
const db = async () => {
  const connec = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`mongoose connected: ${process.env.MONGODB_URI}`);
};
db().catch((err) => {
  console.log(`DB is not connected`, err);
  process.exit(1);
});

export default db;
