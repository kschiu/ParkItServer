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
    //Garage, backyard, etc
    spot_type : { 
        type : String,
        required : true
    },
    pictures : [{
        name : String
    }],
    min_to_campus : {
        type : Number,
        required : true
    },
    num_cars : Number,
    car_type : Array,
});
// change suitable car types to lsit.
module.exports = mongoose.model('Location', LocationSchema);