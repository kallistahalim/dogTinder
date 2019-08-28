//dependency for routes
const express = require("express");

//dependency for database
const mongoose = require("mongoose");

//dependency to use middleware (so we can use req.body)
const bodyParser = require('body-parser');

//import from folder "routes"
const routes = require("./routes");

//dependency-middleware to upload files
const fileUpload = require('express-fileUpload');

//calling dependency express(route)
const app = express();

//create PORT so localhost can render it on the screen
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(fileUpload());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//DB config
const db = require('./config/keys').mongoURI;

//  Connect to the Mongo DB
 mongoose
 .connect(db, { useNewUrlParser: true })
 .then(() => console.log('MongoDB Connected'))
 .catch(err => console.log(err));

// Add routes, both API and view
app.use(routes);

// Start the API server - updated to ES6
app.listen(PORT, () => console.log(`🌎 ==> API Server now listening on PORT ${PORT}`));