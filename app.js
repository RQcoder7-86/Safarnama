const express = require("express");
const app = express();
const path = require("path");

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// Routes
const commentsRoute = require("./routes/comments");
app.use("/", commentsRoute);
const mainRoutes = require("./routes/main"); // ✅ Ye file honi chahiye
app.use("/", mainRoutes);

const abotRoute = require("./routes/about")
app.use("/about",abotRoute)

const packRoute = require("./routes/packges")
app.use("/packages",packRoute)


const bookRoute = require("./routes/FAQs")
app.use("/FAQs",bookRoute)

const destRoute = require("./routes/Transport")
app.use("/Transport",destRoute)

const contactRoute = require("./routes/contact")
app.use("/contact",contactRoute)
const subRoute = require("./routes/subscribes")
app.use("/subscribes",subRoute)
const comRoute = require("./routes/coming")
app.use("/coming",comRoute)
const booRoute = require("./routes/booking")
app.use("/booking",booRoute)

const port = process.env.PORT || 3000
// Server
app.listen(port, '0.0.0.0', () => {
    console.log("Server running on http://192.168.0.105:3000");
});
