const CustomerDTO = require('../model/CustomerDTO');

/*POST--> (body)*/
const saveCustomer = (req, resp) => {
    try {

        const customer = new CustomerDTO({
            name: req.body.name,
            address: req.body.address,
            salary: req.body.salary,
            image: req.body.image,
            other: req.body.other
        });

        customer.save().then(result=>{
            resp.status(200).json({message: 'Success!'});
        }).catch(exception=>{
            resp.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}

const updateCustomer = (req, resp) => {

}

const deleteCustomer = (req, resp) => {

}

const getCustomer = (req, resp) => {

}

const getAllCustomers = (req, resp) => {

}

module.exports = {
    saveCustomer, updateCustomer, deleteCustomer, getCustomer, getAllCustomers
}