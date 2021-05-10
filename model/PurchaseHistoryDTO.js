const mongoose=require('mongoose');

const purchaseHisSchema= new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    customer:{
        type:String
    },
    total:{
        type:Number
    },
    paidVal:{
        type:Number
    },
    list:{
        type:Array
    },
    totalProfit:{
        type:Number
    }
});

module.exports = mongoose.model('History',purchaseHisSchema);
