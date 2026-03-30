import express from "express";

function block_two() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/text", (_, res) => {
      res.send("Hey, how are you?");
    });

    app.get("/content", (_, res) => {
      res.json(["saikiran", 6300000]);
    });

    app.get("/domainOne", (_, res) => {
      res.send("This is my new domain..");
    });

    app.get("/custom-headers", (_, res) => {
      res.set("X-name", "saikiran");
      res.json({
        message: "Custom header response",
      });
    });

    app.get("/domainTwo", (_, res) => {
      res.redirect(300, "/domainOne");
    });

    const routes = {
      1: {
        train: "rajadhani",
        trainId: 1289,
      },
      2: {
        train: "vandhe Bharath",
        trainId: 89239,
      },
      3: {
        train: "secundrabad express",
        trainId: 128945,
      },

    };

    let nextId = 4

    app.get('/routes/:id', (req, res) => {
        const route = routes[req.params.id]
        if(!route) return res.status(404).json({error: "something went wrong.."})
        // res.json(Object.values(route))
        res.json(route)
        
    })

    app.post('/routes', (req, res) =>{
        const route = {id: nextId++, ...req.body}
        routes[route.id] = route
        res.status(201).json(route)
    })

    app.put('/routes/:id', (req, res) => {
        const id = req.params.id
        // const route = routes[id]
        if(!routes[id]) return res.status(404).json({message: "something went wrong.."})
        const updateRoute = {id: Number(id), ...req.body}
    routes[id] = updateRoute
        res.json(updateRoute)
    })

    app.patch('/routes/:id', (req, res) =>{
        const id = req.params.id
        const route = routes[id]
        if(!route) return res.status(404).json({message:"something went wrong.."})
        Object.assign(route, req.body)
        res.json(route)
    })

    app.delete('/routes/:id', (req, res) =>{
        const id = req.params.id
        if(!id) return res.status(404).json({error: "something went wrong.."})
        delete routes[id]
        res.status(201).end()
    })

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      console.log(`server is running on ${base} port...`);

      
    });

    resolve();
  }); //- promise closure
}

async function main() {
  await block_two();
  // process.exit(0) // this method stops the complete program. this wont read further.
}
main();