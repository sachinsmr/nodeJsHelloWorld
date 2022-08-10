const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>welcome to node app</h1>");
});

app.listen(8000, {} => {
console.log('Hello There !!!');
});
