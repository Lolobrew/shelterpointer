// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.locals.assets = "/assets";

// Static directory
app.use('/assets', express.static("assets"));



// Routes
// =============================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/html/index.html"));
});

app.get("/signup", function(req, res){
    res.sendFile(path.join(__dirname, "/html/SignUp.html"));
});

app.get('/findpet', function(req, res){
    res.sendFile(path.join(__dirname, "/html/findpet.html"));
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

