const createError = require("http-errors");
const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Rendering with EJS",
    version: "0.0.0",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "login page",
  });
});

app.get("/protected", (req, res, next) => {
  next(createError(401));
});

app.use((req, res, next) => {
  console.log("entered middleware");
  next();
});

app.use((err, res, req, next) => {
  console.log(err.message);
});

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
