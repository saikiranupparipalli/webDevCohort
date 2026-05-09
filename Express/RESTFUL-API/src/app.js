import express from "express"

import authRoute from "./modules/auth/auth.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParse())

app.use("/api/auth", authRoute)

export default app