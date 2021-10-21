const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
   res.render("register", { title: "Register" });
});

router.post("/", (req, res, next) => {
   const { name, email, password } = req.body;
   if (name && email && password) {
      return res.redirect("/");
   }

   res.redirect("/register");
});

module.exports = router;
