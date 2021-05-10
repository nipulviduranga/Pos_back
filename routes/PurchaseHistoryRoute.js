const express = require('express');
const HistoryController =  require('../controller/PurchaseHistoryController');

const router = express.Router();

//post (save) [body]
router.post('/saveHistory', HistoryController.saveHistory); /*saveCustomer()*/
//get(fetch) [headers]
router.get('/getAllHistory', HistoryController.getAllHistory);
//delete(delete) [headers]
router.delete('/deleteHistory', HistoryController.deleteHistory);
//PUT(Update) [Body]
router.put('/updateHistory', HistoryController.updateHistory);


module.exports = router;
