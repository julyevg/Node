const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://app:Venezuela14*@cluster0.ojvsy.mongodb.net/<dbname>?retryWrites=true&w=majority',
{
    useCreateIndex: true,
    useNewUrlParser:true
})
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));