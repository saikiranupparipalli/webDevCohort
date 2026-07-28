import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import App from "../src/App.js";
import ReactDOMServer from "react-dom/server";
import { teas } from "../src/data.js";
import React from "react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, "../dist");
const htmlPath = path.join(__dirname, "../src/template.html");
const outputHtmlPath = path.join(outputPath, "index.html");
const readFile = fs.readFileSync(htmlPath, "utf-8");

const appHtml = ReactDOMServer.renderToStaticMarkup(
  React.createElement(App, { teas }),
);
const finalHtml = readFile.replace("<!--app-->", appHtml);

fs.ensureDirSync(outputPath);
fs.writeFileSync(outputHtmlPath, finalHtml, "utf-8");
console.log("Build completed. Output written to dist/index.html");
