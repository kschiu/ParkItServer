// server.js
//==============================================================================
// INCLUDE REQUIRED PACKAGES
//==============================================================================
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User       = require('./app/models/user');
var Purchase   = require('./app/models/purchase');
var Listing    = require('./app/models/listing');
var Location   = require('./app/models/location');


// configure app to use bodyParser() to
// get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;        // set our port

//==============================================================================
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//Do this for handling all routes
router.use(function(req, res, next){
	console.log("You've hit a route");
	next(); //proceed to more routes
});

router.get('/', function(req, res) {
    res.json({ message: 'Hello World API' });   
});

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

//=============================================================================
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on Port: ' + port);
