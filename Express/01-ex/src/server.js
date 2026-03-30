import express from "express"
const app = express()
const port = 8000
app.listen(port, () => {
  console.log(`server is running on ${port} port..`)
})

app.get('/', (_, res) => {
  res.json({name: "saikiran"})
})

const getRoute = fetch(`http://localhost:${port}/`)
console.log(getRoute)