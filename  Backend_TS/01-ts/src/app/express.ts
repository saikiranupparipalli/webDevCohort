import express  from 'express'
import type { Application } from 'express'

export function createServer(): Application {
  const app = express()
  app.get('/', function(req, res) {
    res.json({text:"Hey, how are you?"})
  })
  return app
}