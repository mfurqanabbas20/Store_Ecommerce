const express = require('express')

const router = express.Router()
const productModel = require('../models/productModel')
router.get('/', async (req, res) => {
    try {
        const products = await productModel.find({})
        res.status(200).json({sucess: true, data: products})
    }
    catch(err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        if(!req.body.name || !req.body.price || req.body.quanity){
            return res.status(401).send("Enter All Fields")
        }
        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            rating: req.body.rating,
            image: req.body.image
        }
        await productModel.create(newProduct)
        res.status(200).json({success: true, message: 'Successfully Created'})
    }
    catch(err){
        console.log(err); 
    }
})


module.exports = router;
