const {Router} = require('express');
const router = Router();

const products = require('../samples.json');

console.log(products);

const User = require("../models/users");

router.get('/product', (req, res) => {
 //  res.json(products);
   res.send('[GET]Saludos desde express');
});
 
router.post('/product', (req, res) => {
    //res.json(products);
    console.log(req.body);
    const {name, lastName,email,password,typeUser,status  } = req.body;
    if(name && lastName && email && password &&
        typeUser && status)
    {
        let user = User();
        //id = users.length + 1;
        //const newUser = {...req.body, id};
       // user.id =1;
        user.name = req.body.name;
        user.lastName =  req.body.lastName;
        user.email = req.body.email; 
        user.password = req.body.password;
        user.typeUser = req.body.typeUser; 
        user.status = req.body.status;

        user.save((err,user  ) => {
            if (err) res.status(500).send({message : 'error'})
            res.status(200).send({user :user})
        });
      //  users.push(newUser);
        res.json('saved');
    }
    else
    {
        res.send('hola');
    }
    //res.send('hola');
   });

module.exports = router;