/* Imports */
const path = require("path");
const logger = require("morgan");
const express = require("express");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const session = require("express-session");
const registerRouter = require("./routes/register");
const expressEjsLayouts = require("express-ejs-layouts");

/* Create app */
const app = express();

/* Middlewares */
app.use(logger("dev"));
app.use(express.json());
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
   session({
      secret: "thisismysecretkeyidontshare",
      resave: true,
      saveUninitialized: true,
      cookie: {
         maxAge: 1000 * 60 * 60 * 24,
      },
   })
);

/* App Configs */
app.set("view engine", "ejs");

/* Routes */
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

module.exports = app;
