const {Router} = require('express');
const router = Router();
const User = require("../models/users");

router.get('/user', (req, res) => {
     
    res.json({"title": "olassss"});

});
router.post('/user', (req, res) => {

   console.log(req.body);
   const {name, lastName,email,password,typeUser,status  } = req.body;
   if(name && lastName && email && password &&
       typeUser && status)
   {
       let user = User();
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

       res.json('saved');
   }
   else
   {
      res.json('Error al insertt');
   }
  });
module.exports = router;