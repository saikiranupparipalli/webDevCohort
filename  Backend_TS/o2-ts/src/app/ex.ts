import express  from 'express'
import type { Application } from 'express'

export function createServer(): Application {
  const app = express()
  app.get('/', function (req, res) {
    return res.json({message: "Server is running man..!"})
  })
  return app
}