var mongoose     = require('mongoose');

var LocationSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    zip_code : {
        type : String,
        required : true
    },
    indoor : { //type garage street 
        type : Boolean,
        required : true
    },
    num_cars : Number,
    car_type : String
});
// add minutes to campus
// change suitable car types to lsit.
// move picture here
// has a user
module.exports = mongoose.model('Location', LocationSchema);