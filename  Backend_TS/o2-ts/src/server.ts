 import http from "node:http";
 import { env } from "./port.js";
 import {createServer } from "./app/ex.js"
 
 export async function main() {
   try {
     const server = http.createServer(createServer());
     const PORT: number = env.PORT ? +env.PORT : 5000;
 
     server.listen(PORT ,
       () => {
         console.log(`server is running on ${PORT} port..`);
       });
   } catch (error) {
     throw error;
   }
 }
 
 main();
