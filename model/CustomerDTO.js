const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    other:{
        type:Array
    }
});
module.exports = mongoose.model('Customer',CustomerSchema);
