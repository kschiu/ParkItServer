var mongoose     = require('mongoose');

var PurchaseSchema = new mongoose.Schema({
    buyer : {
        type : mongoose.Schema.ObjectId,
        required : true
    },
    seller : {
        type : mongoose.Schema.ObjectId,
        required : true
    },
    listing : {
        type : mongoose.Schema.ObjectId,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);