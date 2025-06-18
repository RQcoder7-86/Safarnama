const express = require("express")
const router =express.Router();
router.get("/",(req,res)=>{
    res.render("pages/contact")
})
router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;
  const entry = `Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}\n`;

  fs.appendFile("contacts.txt", entry, (err) => {
    if (err) return res.status(500).send("Error saving");
    res.status(200).send("Saved");
  });
});
module.exports = router