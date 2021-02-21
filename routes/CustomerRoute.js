const express = require('express');
const CustomerController =  require('../controller/CustomerController');

const router = express.Router();

//post (save)
router.post('/saveCustomer', CustomerController.saveCustomer); /*saveCustomer()*/
//get(fetch)
router.get('/getAllCustomers', CustomerController.getAllCustomers);


module.exports = router;
