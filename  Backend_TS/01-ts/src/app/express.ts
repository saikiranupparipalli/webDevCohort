import express  from 'express'
import type { Application } from 'express'

export function createServer(): Application {
  const app = express()
  return app
}