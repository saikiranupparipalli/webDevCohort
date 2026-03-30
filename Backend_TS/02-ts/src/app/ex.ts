import express  from 'express'
import type { Application } from 'express'
import router from './todo/routes.js'

export function createServer(): Application {
  const app = express()

  app.use(express.json())

  app.get('/', function (req, res) {
    return res.json({message: "Server is running man..!"})
  })
  // app.use('/todos', router)
  
  app.post('/orders', (req, res) => {
    const {biryani,chickenWings} = req.body
    res.status(200).json({
      orders:  biryani, chickenWings
    })
  })
  return app
}
 
  
 
 