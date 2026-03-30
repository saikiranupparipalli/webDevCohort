import express from "express";

function block_four() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    function authMe(req, res, next) {
      const token = req.headers["x-auth-token"];

      if (!token)
        return res.status(401).json({ error: "no token, please login" });

      if (token !== "secret-chaicode")
        return res.status(403).json({ error: "Invalid token" });

      req.user = { id: 1, name: "saikiran", role: "student" }; //- not effect the code working.
      next();
    }

    app.get("/text", (_, res) => {
      res.send("Hey, how are you?");
    });

   
    app.post('/data', (req, res) => {
      const { id, name, role } = req.body
      res.json({ id, name, role })
    })

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      console.log(`server is running on ${base} port...`);
      
      try {
        const response = await fetch(`${base}/data`, {
          method: 'POST',
          headers: {
            'content-Type': 'application/json',
            'x-auth-token': 'secret-chaicode'
          },
          body: JSON.stringify({
            id: 1,
            name: "saikiran",
            role: "student",
          }),
        })
        const data = await response.json()
        console.log(`POST /data: ${data}`)
      } catch (error) {
        throw new error
      }
      
    });

    resolve();
  }); //- promise closure
}

async function main() {
  await block_four();
  // process.exit(0) // this method stops the complete program. this wont read further.
}
main();
