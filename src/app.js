const express = require('express');
const app = express();
const morgan = require('morgan');

var cors = require('cors');
const io = require ('socket.io');

require('./database');



app.use(cors());
// settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

//middle
app.use(morgan('combined'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use(require('./routes/product'));
app.use(require('./routes/user'));

app.listen(app.get('port'), () =>
{
    console.log('Server on port ');
});

