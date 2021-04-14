const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    id:{
        type: String

    },
    name: {
        type: String,
        required: true
    },
    address: {
        type:String

    },
    number:{
        type:Number

    },
    value:{
        type:Number

    },
    other:{
        type:Array
    }
});
module.exports = mongoose.model('Customer',CustomerSchema);
