const {Router} = require('express');
const router = Router();
const User = require("../models/users");

router.get('/user', async (req, res) => {
   var user =  await User.find({});
   res.json(user);
});

router.post('/user', async  (req, res) => {

   const {name,email,password,typeUser,status, userName  } = req.body;
   if(name  && email && password &&
       typeUser && status && userName)
   {
      
      var Isuser =  await User.find({userName : req.body.userName});
      if(Isuser == false)
      {
         try
         {
            let  user = User();
            user.name = req.body.name;
            user.lastName =  req.body.lastName;
            user.email = req.body.email; 
            user.password = req.body.password;
            user.typeUser = req.body.typeUser; 
            user.status = req.body.status;
            user.userName = req.body.userName;

            user.save((err,user  ) => {
               if (err) res.status(500).send({err})
               res.status(200).send({user :user})
            });

            res.json('saved');
         }
         catch(err)
         {
             res.json({message : err })
         }
      }
      else
      {
         res.json(Isuser);
      }
   }
   else
   {
      res.json('Error al insertt');
   }
  });


router.get('/user/:userId', async (req, res) => {
   try 
   {
       var userId =  await User.findById(req.params.userId);
       res.json(userId);

   }
   catch(err)
   {
       res.json({message : err })
   }
  });


router.patch('/user/:userId', async (req, res) => {
   try 
   {
       const updateUser = await User.updateOne(
           {
           _id: req.params.userId}, 
           { $set :{ 
                        name : req.body.name,
                        email : req.body.email,
                        password : req.body.password,
                        typeUser : req.body.typeUser,
                        status : req.body.status,
                        userName : req.body.userName
                   }
           });
           res.json(updateUser);   
   }
   catch(err)
   {
       res.json({message : err })
   }
  });

router.delete('/user/:userId', async (req, res) => {
   try 
   {
       const removeUser = await User.remove({_id: req.params.userId});
       res.json(removeUser);
   }
   catch(err)
   {
       res.json({message : err })
   }
  });
module.exports = router;