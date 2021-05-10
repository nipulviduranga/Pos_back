const express=require('express');
const SellerController=require('../controller/SellerController')
const router=express.Router()

router.post('/saveSeller',SellerController.saveSeller)
router.get('/getSellers',SellerController.getAllSellers)
router.put('/updateSeller',SellerController.updateSeller)
router.delete('/deleteSeller',SellerController.deleteSeller)
router.put('/updateSellerValue',SellerController.updateSellerValue)
router.put('/updatePaying',SellerController.updatePaidValue_Date)

module.exports= router
