const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/booking");
});

router.post("/", (req, res) => {
  const bookingData = req.body;
  console.log("Booking Received:", bookingData); // Optional: Debug log
  // Aap yahan data file ya DB me save bhi kar sakte hain
  res.redirect("/booking"); // ✅ Page reload hota hai
});

module.exports = router;
