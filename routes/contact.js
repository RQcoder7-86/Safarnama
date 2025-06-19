const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  res.render("pages/contact");
});

router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;
  const entry = `Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}\n`;

  fs.appendFile("contacts.txt", entry, (err) => {
    if (err) return res.status(500).send("Error saving");
    res.redirect("/contact"); // ✅ Page reload hoga
  });
});

module.exports = router;
