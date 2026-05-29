import express from "express";
 import type{Express} from "express"
import { authRouter } from "./auth/routes.js";
export function createApp(): Express{
  const app = express();

  app.use(express.json())

  // app.get("/me", (req, res)=>{
  //  return  res.json({message: "welcome.!"})
  // })

  app.use('/auth', authRouter)
  return app;
}
