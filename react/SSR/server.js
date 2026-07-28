import express from "express";
import ReactDOMServer from "react-dom/server";
import React from "react";
import App from "./src/App.js";
 
const app = express();
// console.log('coming from EXPRESS-',app)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/home", (_, res) => {
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));
  res.setHeader("Content-Type", "text/html");
 
  res.send(
    `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body style="background-color: black;">
    <div id='root'>${appHtml}</div>
</body>
</html>`,
  );
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
