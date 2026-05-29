import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../auth/utils/token.js";

export function authenticationMiddleware() {
  return function (req: Request, res: Response, next: NextFunction) {
    const header = req.headers["authorization"];

    if (!header) next();

    if (!header?.startsWith("Bearer")) {
      return res
        .status(404)
        .json({ error: `authorization header must starts with bearer` });
    }

    const token = header.split(" ")[1];
    if (!token)
      return res.status(404).json({
        error: `authorization header must starts with bearer and followed by token`,
      });

    const user = verifyToken(token);
    if (!user) {
      return res.status(401).json({
        error: "Invalid token",
      });
    }

    req.user = user;

    next();
  };
}

export function restrictAuthenticatedUser() {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.user)
      return res.status(401).json({ error: `Authentication required` });
    return next();
  };
}
