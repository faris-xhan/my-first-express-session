/* Imports */
const path = require("path");
const logger = require("morgan");
const express = require("express");

/* Routes Imports */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

/* Create app */
const app = express();

/* Middlewares */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

/* Routes */
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
