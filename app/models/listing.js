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
    half_day : Number,
    full_day : Number,
    week : Number,
    month : Number, 
    startDateTime : {
    	type : Date,
    	required : true
    },
    endDateTime : {
    	type : Date,
    	required : true
    },
    //inactive when purchased
    active : {
        type : Boolean,
        required : true
    },
    about : String
});
//rates half, full, week, month
// make separate for each rate
module.exports = mongoose.model('Listing', ListingSchema);