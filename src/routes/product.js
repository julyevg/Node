const {Router} = require('express');
const router = Router();

const products = require('../samples.json');
console.log(products);

router.get('/product', (req, res) => {
    res.json(products);

});

router.post('/', (req, res) => {
    const id = movies.length + 1;
    const { title, director, year, rating } = req.body;
    const newMovie = { ...req.body, id };
    if (id && title && director && year && rating) {
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});
module.exports = router;