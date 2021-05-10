const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors())

/*=============================================*/

const CustomerRoute = require('./routes/CustomerRoute');
const ItemRoute=require('./routes/ItemRoute')
const SellerRoute=require('./routes/SellerRoute')
const HistoryRoute=require('./routes/PurchaseHistoryRoute')
/*=============================================*/

const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/Kade', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
        console.log('database Connected!')
    }
).catch(error => {
    console.log(error);
})
app.listen(3000, () => {
    console.log(`Server Started on port ${port}`)
    });

/*=======================*/

app.use('/api/v1/customerRoute', CustomerRoute);
app.use('/api/v1/ItemRoute', ItemRoute);
app.use('/api/v1/SellerRoute',SellerRoute)
app.use('/api/v1/HistoryRoute',HistoryRoute)
/*=======================*/
