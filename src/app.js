const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.listen(process.env.PORT);
