import http from "node:http";
import { createApp } from "./app/app.js";

async function main() {
  try {
    const server = http.createServer(createApp());
    const PORT: number = 8000;
    server.listen(PORT, () => {
      console.log(`server is running on ${PORT} port`);
    });
  } catch (error) {
    console.log(`error:`, error);
  }
}
main();
