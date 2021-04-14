const express=require('express');
const ItemController=require('../controller/ItemController')

const router= express.Router();


//post (save) [body]
router.post('/saveItem', ItemController.saveItem);
//get(fetch) [headers]
router.get('/getItems', ItemController.getAllItems);
//delete(delete) [headers]
router.delete('/deleteItem', ItemController.deleteItem);
//PUT(Update) [Body]
router.put('/updateItem', ItemController.updateItem);


module.exports = router;
