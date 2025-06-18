const express = require("express");
const router = express.Router();

// Home Route
router.get("/", (req, res) => {
  res.render("pages/home"); // Make sure views/index.ejs exists
});

module.exports = router;
