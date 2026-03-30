import express from "express";

function block_three() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());
    
    
    
    app.get("/text", (_, res) => {
      res.send("Hey, how are you?");
    });
   

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      console.log(`server is running on ${base} port...`);

      
    });

    resolve();
  }); //- promise closure
}

async function main() {
  await block_three();
  // process.exit(0) // this method stops the complete program. this wont read further.
}
main();