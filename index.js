const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my first Docker project");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Amit");
});

app.listen(5000, () => {
  console.log("listening");
});
