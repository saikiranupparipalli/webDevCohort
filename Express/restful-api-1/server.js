import 'dotenv/config'
import app from './src/app.js'
import db from './src/common/config/db.js'

const PORT = process.env.PORT || 8080

const start = async () => {
  await db()
  app.listen(PORT, () => {
    console.log(`server is running on ${ PORT} port in ${process.env.NODE_ENV} mode`)
  })
}


start().catch((err) => {
  console.error("check server file, something went wrong..",err)
  process.exit(1)
})