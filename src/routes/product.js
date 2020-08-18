const {Router} = require('express');
const router = Router();
const Products = require('../models/products');

router.get('/product', async (req, res) => {
    var product =  await Products.find({});
    res.json(product);
});
router.get('/product/:productId', async (req, res) => {
    try 
    {
        let productId = req.params.productId;
        var product =  await Products.findById(req.params.productId);
        res.json(product);

    }
    catch(err)
    {
        res.json({message : err })
    }
   });

router.post('/product', (req, res) => {

    console.log(req.body);
    
    if(req.body)
    {
        let product = Products();
        product.product_id = req.body.product_id;
        product.name = req.body.name;
        product.description =  req.body.description;
        product.count = req.body.count; 
        product.price = req.body.price;
        product.client = req.body.client; 
        product.status = req.body.status;
        product.imagen = req.body.imagen;


        product.save((err,user  ) => {
            if (err) res.status(500).send({message : 'error'})
            res.status(200).send({user :user})
        });

        res.json('saved');
    }
    else
    {
        res.send('Error');
    }

   });

router.patch('/product/:product_id', async (req, res) => {
    try 
    {
        const updateProduct = await Products.updateOne(
            {
            _id: req.params.product_id}, 
            { $set :{ 
                        name : req.body.name,
                        description :  req.body.description,
                        count : req.body.count,
                        price : req.body.price,
                        client : req.body.client,
                        status : req.body.status,
                        imagen : req.body.imagen
                    }
            });
            res.json(updateProduct);
        
    }
    catch(err)
    {
        res.json({message : err })
    }
   });

router.delete('/product/:product_id', async (req, res) => {
    try 
    {
        const removeProduct = await Products.remove({_id: req.params.product_id});
        res.json(removeProduct);
    }
    catch(err)
    {
        res.json({message : err })
    }
   });

module.exports = router;