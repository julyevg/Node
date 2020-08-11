const {Router} = require('express');
const router = Router();
router.get('/', (req, res) => {
     
    res.json({"title": "ola"});
    //res.send("hola");
});
module.exports = router;