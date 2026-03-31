import express from "express";

function block_four() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    function authMe(req, res, next) {
      const token = req.headers["x-auth-token"];

      if (!token)
        return res.status(401).json({ error: "no token, please provide the token in headers" });

      if (token !== "secret-chaicode")
        return res.status(403).json({ error: "Invalid token" });

      req.user = { id: 1, name: "saikiran", role: "architect" }; //- not effect the code working.
      next();
    } //--middleware/1
    
    function getRole(role) {
      return (req, res, next) => {
        if (!req.user || !role.includes(req.user.role)) {
          return res.status(403).json({ error: `role ${req.user.role} is not available..` })
        } else {
          res.json({message: `role ${req.user.role} is there..`})
        }
          next()
      }
    } //-middleware/2
    
    // --routes
    app.get("/text", (_, res) => {
      res.send("Hey, how are you?");
    });
    
    app.get('/role', authMe,  getRole(['teacher', 'doctor', 'architect']))
    
    
    app.post('/data', authMe, (req, res) => {
      const { id, name, role } = req.body
      res.json({ id, name, role })
    })

    const port = 8080
    app.listen(port, async () => {
      
      console.log(`server is running on port ${port}..`)
      
      try {
        const response = await fetch(`http://127.0.0.1:${port}/data`, {
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
      
    }) //--server 
    

    resolve();
  }); //- promise closure
}

async function main() {
  await block_four();
  // process.exit(0) // this method stops the complete program. this wont read further.
}
main();
