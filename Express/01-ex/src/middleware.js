import express from "express";

function block_three() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());
    let log = []
    app.use((req, res, next) => {
      const logEntry = `${req.method} : ${req.url}`
      log.push(logEntry)
      console.log(`log-- ${log}`)
      // res.send(logEntry) -throws an error
        next()
    })
    
    app.use((req, res, next) => {
      req.startTime = Date.now()
      
      res.on('finish', () => {
        const duration = Date.now() - req.startTime
        console.log(`TIMER-- ${req.method} - ${req.url} = ${Number(duration)}ms`)
      })
      next()
    })
    
    
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