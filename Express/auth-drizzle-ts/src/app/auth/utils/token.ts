import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

export interface userToken {
  id: string;
}

export function createToken(payload: userToken) {
  const token = jwt.sign(payload, process.env.SECRET_TOKEN!, {
    expiresIn: process.env.SECRET_TOKEN_EXPIRES_IN!,
  });
  return token;
}
export function verifyToken(token: string) {
  try {
    const payload = jwt.verify(token, process.env.SECRET_TOKEN!) as userToken;
    return payload;
  } catch (error) {
   
    console.log(error)
  }
}
