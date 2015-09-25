var mongoose     = require('mongoose');

var ListingSchema = new mongoose.Schema({
    user : {
    	type : mongoose.Schema.ObjectId,
    	required : true
    },
    location : {
    	type : mongoose.Schema.ObjectId,
    	required : true
    },
    price : {
    	type : Number,
    	required : true
    },
    startDateTime : {
    	type : Date,
    	required : true
    }
    endDateTime : {
    	type : Date,
    	required : true
    },
    pictures : [{
    	name : String
    }]
});

module.exports = mongoose.model('Listing', ListingSchema);