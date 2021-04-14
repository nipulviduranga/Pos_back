const mongoose=require('mongoose');
const ItemSchema=new mongoose.Schema({
    itemId:{
        type:String
    },
    itemName:{
        type:String,
        required:true
    },
    buyingPrice:{
        type:Number,
        required:true
    },
    sellingPrice:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number
    },
    selectedType:{
        type:String,
        required:true
    },
    sellerName:{
        type:String
    },
    Other:{
        type:Array
    }
})

module.exports=mongoose.model('ItemSchema',ItemSchema)
