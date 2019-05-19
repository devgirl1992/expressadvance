const express = require('express');
const router = express.Router();
const Joi = require('joi');

const products = [
    {name:"proOne", id: 1},
    {name:"protwo", id: 2},
    {name:"proThree", id: 3}

]


//get
router.get('/',  (req, res) => {
    res.send(products)
});

router.get('/:id', (req,res) => {
    const product = products.find(p  => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).send('this product not exist');

    res.send(products);
});



//post
router.post('/', (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newpro = {
        name: req.body.name,
        id: products.length + 1
    };
    products.push(newpro);
    res.send(products);

});


//put
router.put('/:id', (req,res) => {
    const product = products.find(p  => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).send(error.details[0].message);

    const { error } = validateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    product.name = req.body.name;
    res.send(products);
});


//Delete
router.delete('/:id', (req, res) => {
    const product = products.find(p  => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).send('this product cannot find');

    const index = products.indexOf(product);
    products.splice(index, 1);

    res.send(products)
});

function validateProduct(product) {
    const schema = {
        name: Joi.string().min(3).max(30).required()
    };
    return Joi.validate(product, schema);
}

module.exports = router;