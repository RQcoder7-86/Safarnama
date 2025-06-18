const express = require("express");
const fs = require("fs");
const router = express.Router();

// GET route to show comments
router.get("/", (req, res) => {
  fs.readFile("comments.txt", "utf-8", (err, data) => {
    const comments = data ? data.trim().split("\n") : [];
    res.render("pages/home", { comments });
  });
});

// POST route to submit new comment
router.post("/comment", (req, res) => {
  const name = req.body.name || "Anonymous";
  const message = req.body.message;
  const newComment = `👤 ${name}: ${message}`;

  fs.appendFile("comments.txt", newComment + "\n", (err) => {
    if (err) console.log("Error saving comment:", err);
    res.redirect("/");
  });
});
router.post("/delete", (req, res) => {
  const deleteIndex = parseInt(req.body.index);
  
  fs.readFile("comments.txt", "utf-8", (err, data) => {
    if (err) return res.redirect("/");

    let comments = data.trim().split("\n");
    
    if (deleteIndex >= 0 && deleteIndex < comments.length) {
      comments.splice(deleteIndex, 1); // remove comment
      const updatedData = comments.join("\n");

      fs.writeFile("comments.txt", updatedData + (updatedData ? "\n" : ""), (err) => {
        if (err) console.error("Error deleting comment:", err);
        res.redirect("/");
      });
    } else {
      res.redirect("/");
    }
  });
});


module.exports = router;
