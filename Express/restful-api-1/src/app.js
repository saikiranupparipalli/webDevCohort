import express from "express"
import * as cookieParser from "cookie-parser"

const app = express()
app.use(cookieParser())
export default app