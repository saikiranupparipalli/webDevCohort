 
import type { userToken } from "../auth/utils/token.js";
declare global {
  namespace Express {
    interface Request {
      user?: userToken;
    }
  }
}

export {};