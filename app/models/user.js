var mongoose     = require('mongoose');

var UserSchema   = new mongoose.Schema({
    username : {
    	type : String,
    	required : true
    },
    password : {
    	type : String,
    	required : true
    }, 
    email : {
    	type : String,
    	required : true
    },
    //nested attributes
    payments : [{
    	card_number : {
    		type : String,
    		required : true
    	},
    	expiration_month : {
    		type : String,
    		required : true
    	},
    	expiration_year : {
    		type : String,
    		required : true
    	},
    	holder_name : {
    		type : String,
    		required : true
    	},
    	security_code : {
    		type : String,
    		required : true
    	},
    	zip_code : {
    		type : String,
    		required : true
    	}
    }],
    pictures : [{
    	name : String
    }]
});

module.exports = mongoose.model('User', UserSchema);