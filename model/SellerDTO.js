const mongoose=require('mongoose')

const SellerSchema=new mongoose.Schema({
    sellerId:{
        type:String
    },
    sellerName:{
        type:String
    },
    sellerAddress:{
        type:String
    },
    sellerNumber:{
        type:String
    },
    date:{
        type:String
    },
    description:{
        type:String
    },
    paidValue:{
        type:Number
    },
    totalValue:{
        type:Number
    },
    other:{
        type:Array
    }

});

module.exports = mongoose.model('SellerSchema',SellerSchema)
