import express from "express";

function block_basics() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/", (_, res) => {
      res.json({ name: "saikiran", age: 22 });
    });

    app.get("/search", (req, res) => {
      const { q, limit } = req.query;
      res.json({ query: q, limit: limit || 5 });
    }); // - req.query

    app.get("/users/:id", (req, res) => {
      const { id } = req.params;
      res.json({
        item: id,
        price: 23,
      });
    }); // - req.params

    app.post("/orders", (req, res) => {
      const { biryani, stators } = req.body;
      res.status(200).json({
        orders: { biryani, stators },
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;
      console.log(`server is running on port ${base}`);
      try {
        const getRes = await fetch(`${base}/`);
        const getData = await getRes.json();
        console.log("GET /", JSON.stringify(getData));

        const searchRes = await fetch(`${base}/search?query=biryani&limit=2`);
        const searchData = await searchRes.json();
        console.log("GET /search?query", JSON.stringify(searchData));

        const usersRes = await fetch(`${base}/users/20`);
        const usersData = await usersRes.json();
        console.log("GET /users/id", JSON.stringify(usersData));

        const ordersRes = await fetch(`${base}/orders`, {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            biryani: 2,
            stators: 3,
          }),
        });
        console.log("POST /orders", JSON.stringify(ordersRes));
      } catch (error) {
        throw error;
      }

      // resolve();
      server.close(() => {
        console.log("Block 1 served");
        resolve();
      });
    });
  }); // - Promise closure
}
 

async function main() {
  await block_basics();

  // process.exit(0) // this method stops the complete program. this wont read further.
}
main();