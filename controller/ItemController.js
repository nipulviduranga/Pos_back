const ItemDTO= require('../model/ItemDTO')

const saveItem =(req,res)=>{
try{
    const item=new ItemDTO({
        itemId: req.body.itemId,
        itemName: req.body.itemName,
        buyingPrice: req.body.buyingPrice,
        sellingPrice: req.body.sellingPrice,
        quantity: req.body.quantity,
        selectedType: req.body.selectedType,
        sellerName: req.body.sellerName
    })

    item.save().then(result=>{
        res.status(200).json({message:'success!'});
    }).catch(exception=>{
        console.log(exception);
        res.status(500).json({error:exception});
    })
    }catch (e) {
        res.status(500).json({error:e});
    }
}
const updateItem = (req,res) =>{
   try{
    ItemDTO.updateOne({_id:req.body.id},{
        $set:{
            itemId: req.body.itemId,
            itemName: req.body.itemName,
            buyingPrice: req.body.buyingPrice,
            sellingPrice: req.body.sellingPrice,
            quantity: req.body.quantity,
            selectedType: req.body.selectedType,
            sellerName: req.body.sellerName
        }
    }).then(result =>{
        if(result.nModified>0) {
            res.status(200).json({message: 'Updated!'});
        }else {
            res.status(500).json({message: 'Try Again!'});
        }
    }).catch(e=>{
        console.log(e);
        res.status(500).json({error:e})
    });
   }catch (e) {
       res.status(500).json({error:e})
   }
}
const deleteItem=(req,res)=>{
  try{
    ItemDTO.deleteOne({_id:req.headers.id}).then(result=>{
        if(result.deletedCount>0){
            res.status(200).json({message:'Deleted!'})
        }else {
            res.status(500).json({message:'Try Again!'})
        }
    }).catch(error=>{
        res.status(500).json({error:e})
    })
  }catch (e) {
      res.status(500).json({error:e})
  }


}
const getAllItems=(req,res)=>{
    try{
        ItemDTO.find().then(result=>{
            res.status(200).json({dataSet:result})
        }).catch(err=>{
            res.status(500).json({error:err})
        })
    }catch (e) {
        res.status(500).json({error:e})
    }
}

module.exports={
    saveItem,updateItem,deleteItem,getAllItems
}
