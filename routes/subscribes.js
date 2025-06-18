const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res) => {
    const email = req.body.email;
    fs.appendFile("./subcribe.txt", email + "\n", (err) => {
        if (err) {
            return res.status(500).json({ success: false });
        }
        res.status(200).json({ success: true });
    });
});

module.exports = router;

