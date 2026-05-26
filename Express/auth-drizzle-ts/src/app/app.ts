import express from "express";
import type { Express } from "express";

export function createApp(): Express {
  const app = express();


  app.get("/me", (req, res)=>{
   return  res.json({message: "welcome.!"})
  })
  return app;
}
