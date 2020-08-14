const {Router} = require('express');
const router = Router();

const products = require('../samples.json');
console.log(products);



router.get('/user', (req, res) => {
 //  res.json(products);
   res.send('[GET]Saludos desde express');
});
 
router.post('/user', (req, res) => {
    //res.json(products);
    console.log(req.body);
    res.send('hola');
   });

module.exports = router;