const express = require("express")
const { v4: uuidv4 } = require('uuid');
const router =express.Router();
router.get("/",(req,res)=>{
    res.render("pages/booking")
})
module.exports = router
