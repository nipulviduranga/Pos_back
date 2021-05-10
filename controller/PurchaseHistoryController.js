const purHisDTO=require('../model/PurchaseHistoryDTO')

const saveHistory=(req,res)=>{
    try {

        const history = new purHisDTO({
            date:req.body.date,
            customer: req.body.customer,
            total: req.body.total,
            paidVal: req.body.paidVal,
            list:req.body.list,
            totalProfit: req.body.totalProfit
        });

        history.save().then(result => {
            res.status(200).json({message: 'Success!'});
        }).catch(exception => {
            console.log(exception);
            res.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        res.status(500).json({error: e});
    }
}
const updateHistory = (req, resp) => {
    purHisDTO.updateOne({_id: req.body.id}, {
        $set: {
            date:req.body.date,
            customer: req.body.customer,
            total: req.body.total,
            paidVal: req.body.paidVal,
            list:req.body.list,
            totalProfit: req.body.totalProfit
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
const deleteHistory = (req, resp) => {
    try {

        purHisDTO.deleteOne({_id: req.headers.id}).then(result => {

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



const getAllHistory = (req, resp) => {
    try {
        // pagination
        purHisDTO.find().then(result => {

            resp.status(200).json({dataSet: result});

        }).catch(exception => {
            resp.status(500).json({error: exception});
        })

    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}

module.exports={
    saveHistory,updateHistory,deleteHistory,getAllHistory
}
