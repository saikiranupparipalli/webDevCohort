import express from "express";
import type { Router } from "express";
import AuthenticationController from "./controller.js";

export const authRouter: Router = express.Router();

const authenticationController = new AuthenticationController();

authRouter.post(
  "/sign-up",
  authenticationController.handleSignup.bind(authenticationController),
);

authRouter.post("/sign-in", authenticationController.handleSingin.bind(AuthenticationController),)
