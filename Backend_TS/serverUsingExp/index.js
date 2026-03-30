// "type":"commonjs" => syntax "export" module used.
// "type":"module" => syntax "import" module used.

/*  In http request, the data sent from client will always be in string format.
- express.json() parse the data into object and store inside req.body.


*/


const server = require("express")

const app = server()
app.use(server.json())
app.get('/home', (req, res) => {
  res.json({
    liOfNames: ["sai", "jayanth", "karthik"]
  })
})

app.post('/list', (req, res) => {
  res.status(200).json({
    status: 'received',
    list: req.body
  })
})

app.listen(5000, () => {
  console.log('server started..')
})