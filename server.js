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

//Connect to remote mongolab DB
mongoose.connect('mongodb://dev:development@ds051893.mongolab.com:51893/parkitdb');

var port = process.env.PORT || 8080;        // set our port

//==============================================================================
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//==============================================================================
// MIDDLEWARE
// =============================================================================
router.use(function(req, res, next){
	console.log("You've hit a route");
	next(); //proceed to more routes
});

router.get('/', function(req, res) {
    res.json({ message: 'Root of the API'});   
});

router.route('/locations')

	.get(function(req,res){
		Location.find(function(err, loc){
			if (err)
				res.send(err);
			res.json(loc);
		});
	})

	.post(function(req,res){
		var loc = new Location();
		loc.address = req.body.address;
		loc.city = req.body.city;
		loc.state = req.body.state;
		loc.zip_code = req.body.zip_code;
		loc.indoor = req.body.indoor;
		loc.num_cars = req.body.num_cars;
		loc.car_type = req.body.car_type;
		loc.reviews = req.body.reviews;

		loc.save(function(err){
			if (err)
				res.send(err);
			res.json({message: 'Location created.'});
		});
	});


// REGISTER OUR ROUTES
app.use('/', router);

//=============================================================================
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port ' + port);