import express from "express";
import React from "react";
import App from "./src/App.js";
import ReactDOMServer from "react-dom/server";

const app = express();

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.get("/home", (req, res) => {
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
</html>
        `,
  );
});
