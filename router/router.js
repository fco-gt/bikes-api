const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/docs", (req, res) => {
  res.render("docs");
});

module.exports = router;
