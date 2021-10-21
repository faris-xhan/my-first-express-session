/* Imports */
const path = require("path");
const logger = require("morgan");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");

/* Create app */
const app = express();

/* Middlewares */
app.use(logger("dev"));
app.use(express.json());
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

/* App Configs */
app.set("view engine", "ejs");

/* Routes */
app.use("/", indexRouter);
app.use("/login", loginRouter);

module.exports = app;
