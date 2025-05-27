const express = require('express')

const router = express.Router()
const userModel = require('../models/userModel')

router.post('/', async (req, res) => {
    try {
        if(!req.body.name || !req.body.email || !req.body.password) {
            return res.status(401).send('Enter all fields')
        }
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        const user = await userModel.create(newUser)
        res.status(200).json({data: user})
    }
    catch(err) {
        console.log(err);    
    }
})

module.exports = router