const express= require('express');
const mongoose= require('mongoose');

const app= express();

const port=3000;
mongoose.connect('mongodb://127.0.0.1:27017/ThogaKade',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    app.listen(port,()=>{
        console.log(`Server Started on port ${port}`)
    })
}).catch(error=>{
    console.log(error);
})
