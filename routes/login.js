const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
   res.render("login", { title: "Login" });
});

router.post("/", (req, res, next) => {
   const { email, password } = req.body;
   if (email && password) {
      return res.redirect("/");
   }

   res.redirect("/login");
});

module.exports = router;
