import http from "node:http";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";
import express from "express";
import path from "node:path";

dotenv.config();
async function main() {
  const app = express();
//    app.get("/", (req, res) => {
//     return res.send("hey im running successfully");
//   });

  app.use(express.static(path.resolve("./public")));

 
  const server = http.createServer(app);
  const io = new Server();

  io.attach(server);

  io.on("connection", (socket)=>{
    console.log(`A new socket has connected`, socket.id)
  })
  io.on("message", (data)=>{
    console.log(`message from socket`, data)
  })
  server.listen(process.env.PORT, (req, res) => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
}

main();
