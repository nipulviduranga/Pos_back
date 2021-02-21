const express = require('express');
const CustomerController =  require('../controller/CustomerController');

const router = express.Router();

//post (save) [body]
router.post('/saveCustomer', CustomerController.saveCustomer); /*saveCustomer()*/
//get(fetch) [headers]
router.get('/getAllCustomers', CustomerController.getAllCustomers);
//delete(delete) [headers]
router.delete('/deleteCustomer', CustomerController.deleteCustomer);


module.exports = router;
