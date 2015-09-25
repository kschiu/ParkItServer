var mongoose     = require('mongoose');

var LocationSchema = new mongoose.Schema({
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
    indoor : {
        type : Boolean,
        required : true
    },
    num_cars : Number,
    car_type : String,
    reviews : [{
        rating : {
            type : Number,
            required : true
        },
        description : String
    }]
});

module.exports = mongoose.model('Location', LocationSchema);