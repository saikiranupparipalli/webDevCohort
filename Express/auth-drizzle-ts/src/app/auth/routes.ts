import express from "express";
import type { Router } from "express";
import AuthenticationController from "./controller.js";
import { restrictAuthenticatedUser , authenticationMiddleware} from "../middlware/auth-middleware.js";

export const authRouter: Router = express.Router();

const authenticationController = new AuthenticationController();

authRouter.post(
  "/sign-up",
  authenticationController.handleSignup.bind(authenticationController),
);

authRouter.post("/sign-in", authenticationController.handleSingin.bind(AuthenticationController),)

authRouter.get('/me',authenticationMiddleware(),restrictAuthenticatedUser(), authenticationController.handleMe.bind(authenticationController) )