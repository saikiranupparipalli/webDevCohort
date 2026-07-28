import { fileURLToPath } from "url";
import path from "path";
import fs from "node:fs"

const __filename = fileURLToPath(import.meta.url);
console.log(__filename); //extracting the file path including current location.

const __dirname = path.dirname(__filename);
console.log(__dirname); //extracting the directory path leaving the current location

const outputPath = path.join(__dirname, "./dist"); //creating a new folder inside the directory

const dirHtmlOutputPath = path.join(__dirname, "./index.html"); // joining the html file located inside __dirname

const newDistFolder = fs.mkdirSync(outputPath) //create a dist folder

const outputHtmlPath = path.join(outputPath, "index.html"); // creating a new html file inside dist folder


 const readDirHtmlOutput = fs.readFileSync(dirHtmlOutputPath, 'utf-8') // reading the html file located inside __dirname
 console.log(readDirHtmlOutput)

 const createDistHtmlOutput = fs.writeFileSync(outputHtmlPath, readDirHtmlOutput)
 console.log(createDistHtmlOutput)