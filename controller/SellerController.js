const SellerDto=require('../model/SellerDTO')

const saveSeller=(req,res)=>{
    try{
        const seller=new SellerDto({
        sellerId:req.body.sellerId,
        sellerName:req.body.sellerName,
        sellerAddress:req.body.sellerAddress,
        sellerNumber:req.body.sellerAddress,
        date:req.body.date,
        description:req.body.description,
        totalValue:req.body.totalValue,
        paidValue:req.body.paidValue,
        other:req.body.other
        })

        seller.save().then(result=>{
            res.status(200).json({message: 'Success!'})
        }).catch(err=>{
            res.status(500).json({message:err})
            console.log(err)
        })
    }catch (e) {
        res.status(500).json({message:e})
        console.log(e)
    }
}
const updateSeller=(req,res)=>{
    try{
        SellerDto.updateOne({_id:req.body.id},{
            $set:{
                sellerId: req.body.sellerId,
                sellerName:req.body.sellerName,
                sellerAddress:req.body.sellerAddress,
                sellerNumber:req.body.sellerAddress,
                date:req.body.date,
                description:req.body.description,
                paidValue:req.body.paidValue,
                totalValue:req.body.totalValue,
                other:req.body.other
            }
        }).then(response=>{
            if(response.nModified>0) {
                res.status(200).json({message: 'Updated!'})
            }else {
                res.status(500).json({message:'Try Again!'})
            }

        }).catch(error=>{
            res.status(500).json({error:error})
            console.log(error);
        })
    }catch (e) {
        res.status(500).json({error:e})
        console.log(e);
    }
}
const deleteSeller=(req,res)=>{
    try {


    SellerDto.deleteOne({_id:req.headers.id}).then(
        result=>{
            if(result.deletedCount>0) {
                res.status(200).json({message: 'Deleted!'})
            }else {
                res.status(500).json({message:'Try Again!'})
            }
        }).catch(error=>{
        res.status(500).json({error:error})
    })
    }catch (e) {
        res.status(500).json({error:e})
    }
}
const getAllSellers=(req,res)=>{
    try {
        SellerDto.find().then(result=>{
            res.status(200).json({dataSet:result})
        }).catch(error=>{
            res.status(500).json({error:error})
        })
    }catch (e) {
        res.status(500).json({error:e})
    }
}
const updateSellerValue=(req,res)=>{
    try{
        SellerDto.updateOne({_id:req.body.id},{
            $set:{
                totalValue:req.body.totalValue
            }
        }).then(response=>{
            if(response.nModified>0) {
                res.status(200).json({message: 'Updated!'})
            }else {
                res.status(500).json({message:'Try Again!'})

            }

        }).catch(error=>{
            res.status(500).json({error:error})
            console.log(error);
        })
    }catch (e) {
        res.status(500).json({error:e})
        console.log(error);
    }
}
const updatePaidValue_Date=(req,res)=>{
    try{
        SellerDto.updateOne({_id:req.body.id},{
            $set:{
                date:req.body.date,
                paidValue:req.body.paidValue

            }
        }).then(response=>{
            if(response.nModified>0) {
                res.status(200).json({message: 'Updated!'})
            }else {
                res.status(500).json({message:'Try Again!'})
            }

        }).catch(error=>{
            res.status(500).json({error:error})
        })
    }catch (e) {
        res.status(500).json({error:e})
    }
}
module.exports={
    saveSeller,updateSeller,deleteSeller,getAllSellers,updateSellerValue,updatePaidValue_Date}
