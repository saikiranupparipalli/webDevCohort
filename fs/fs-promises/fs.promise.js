import fs from "node:fs/promises"

const data = await fs.readFile("promise.txt", "utf-8")
console.log(data)

const file = await fs.writeFile("file.txt", "hey, im profie" , ((error)=> console.log(error)))
console.log(file)