//not sure what path is for
const path = require("path");

//create router for each use through express (basically Router and App are the same)
const router = require("express").Router();

//import information from routes/api
const apiRoutes = require("./api");

// API Routes
router.use("/ap``i", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
