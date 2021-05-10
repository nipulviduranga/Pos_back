const CustomerDTO = require('../model/CustomerDTO');

/*POST--> (body)*/
const saveCustomer = (req, resp) => {
    try {

        console.log(req.body);

        const customer = new CustomerDTO({
            id:req.body.id,
            name: req.body.name,
            address: req.body.address,
            number: req.body.number,
            value:req.body.value,
            other: req.body.other
        });

        customer.save().then(result => {
            resp.status(200).json({message: 'Success!'});
        }).catch(exception => {
            console.log(exception);
            resp.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}

const updateCustomer = (req, resp) => {
    CustomerDTO.updateOne({_id: req.body.id}, {
        $set: {
            name: req.body.Uname,
            address: req.body.Uaddress,
            number: req.body.Unumber,
            value:req.body.Uvalue,
            id:req.body.Uid
        }
    }).then(result => {
        console.log(req.body.id);
        if (result.nModified>0) {
            resp.status(200).json({message: 'Updated!'});
        } else {
            resp.status(500).json({message: 'Try Again!'});
        }

    }).catch(error => {
        console.log(error);
        resp.status(500).json({error: error});
    })
}
const updateCustomerVal = (req, resp) => {
    CustomerDTO.updateOne({_id: req.body.id}, {
        $set: {
            value:req.body.Uvalue,
        }
    }).then(result => {
        console.log(req.body.id);
        if (result.nModified>0) {
            resp.status(200).json({message: 'Updated!'});
        } else {
            resp.status(500).json({message: 'Try Again!'});
        }

    }).catch(error => {
        console.log(error);
        resp.status(501).json({error: error});
    })
}

const deleteCustomer = (req, resp) => {
    try {

        CustomerDTO.deleteOne({_id: req.headers.id}).then(result => {

            if (result.deletedCount > 0) {
                resp.status(200).json({message: 'Deleted!'});
            } else {
                resp.status(500).json({message: 'Try Again!'});
            }

        }).catch(error => {
            resp.status(500).json({error: error});
        })

    } catch (e) {
        resp.status(500).json({error: e});
    }
}

const getCustomer = (req, resp) => {

}

const getAllCustomers = (req, resp) => {
    try {
        // pagination
        CustomerDTO.find().then(result => {

            resp.status(200).json({dataSet: result});

        }).catch(exception => {
            resp.status(500).json({error: exception});
        })

    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}

module.exports = {
    saveCustomer, updateCustomer, deleteCustomer, getCustomer, getAllCustomers,updateCustomerVal
}
