// server.js
//==============================================================================
// INCLUDE REQUIRED PACKAGES
//==============================================================================
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var cors       = require('cors');
var User       = require('./app/models/user');
var Purchase   = require('./app/models/purchase');
var Listing    = require('./app/models/listing');
var Location   = require('./app/models/location');

// configure app to use bodyParser() to
// get the data from a POST
// Enable CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

//==============================================================================
// User Routes
// =============================================================================
router.route('/users')
	.get(function(req,res){
		User.find(function(err, u){
			if (err)
				res.send(err);
			res.json(u);
		});
	})

	.post(function(req,res){
		var user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		user.email = req.body.email;
		user.payments = req.body.payments;
		user.pictures = req.body.pictures; 

		user.save(function(err){
			if (err){
				res.send(err);
			}else{
				res.json(user);
			}
		});
	});

router.route('/users/:user_id')
	.get(function(req,res){
		User.findById(req.params.user_id, function(err,u){
			if (err)
				res.send(err);
			res.json(u);
		});
	});

//==============================================================================
// Location Routes
// =============================================================================
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
		loc.user = req.body.user;
		loc.address = req.body.address;
		loc.city = req.body.city;
		loc.state = req.body.state;
		loc.zip_code = req.body.zip_code;
		loc.min_to_campus = req.body.min_to_campus;
		loc.num_cars = req.body.num_cars;
		loc.car_type = req.body.car_type;
		console.log(req.body);

		loc.save(function(err){
			console.log(err);
			if (err){
				res.send(err);
			} else {
				res.send(loc);
			};	
		});
	});

router.route('/locations/:location_id')
	.get(function(req,res){
		Location.findById(req.params.location_id, function(err,loc){
			if (err)
				res.send(err);
			res.json(loc);
		});
	})

	.delete(function(req,res){
		Location.remove({
			_id : req.params.location_id
		}, function(err, loc){
			if (err)
				req.send(err);
			res.json({message: "Location deleted"});
		});
	});

//==============================================================================
// Listing routes
// =============================================================================
router.route('/listings')
	.get(function(req,res){
		Listing.find(function(err,listing){
			if (err)
				res.send(err);
			res.json(listing);
		});
	})

	.post(function(req,res){
		var listing = new Listing();
		listing.user = req.body.user;
		listing.location = req.body.location;
		listing.price = req.body.price;
		listing.startDateTime = req.body.startDateTime;
		listing.endDateTime = req.body.endDateTime;
		listing.pictures = req.body.pictures;

		listing.save(function(err){
			if (err){
				res.send(err);
			}else{
				res.json(listing);
			}
		});
	});

router.route('/listings/:listing_id')
	.get(function(req,res){
		Listing.findById(req.params.listing_id, function(err,listing){
			if (err)
				res.send(err);
			res.json(listing);
		});
	})

	.delete(function(req,res){
		Listing.remove({
			_id : req.params.listing_id
		}, function(err, listing){
			if (err)
				req.send(err);
			res.json({message: "Listing deleted"});
		});
	});


//==============================================================================
// Purchase routes
// =============================================================================
router.route('/purchases')
	.get(function(req,res){
		Purchase.find(function(err,purchase){
			if (err)
				res.send(err);
			res.json(purchase);
		});
	})

	.post(function(req,res){
		var purchase = new Purchase();
		purchase.buyer = req.body.buyer;
		purchase.seller = req.body.seller;
		purchase.listing = req.body.listing;
		purchase.cars = req.body.cars;
		purchase.date = req.body.date;

		purchase.save(function(err){
			if (err){
				res.send(err);
			} else {
				res.json(purchase);
			}
		});
	});

router.route('/purchases/:purchase_id')
	.get(function(req, res){
		Purchase.findById(req.params.purchase_id, function(err, purchase){
			if (err)
				res.send(err);
			res.json(purchase);
		});
	});

// REGISTER OUR ROUTES
app.use('/', router);

//=============================================================================
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port ' + port);