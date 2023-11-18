/* import express */
const express = require("express");
const app = express();

/* configure .env & set port */
require("dotenv").config();
const port = process.env.PORT;

/* static file */
app.use(express.static("src/public"));
app.use(express.static("node_modules/bootstrap/dist"));

/* template engines */
const path = require("path");
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.resolve("src/public"));

/* home page */
app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html");
  //
  res.status(200).render("index", { title: "Template Engines" });
});

/* wild card handler */
app.get("/**", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.status(404).send(`<h1>Page not found</h1>`);
});

app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
