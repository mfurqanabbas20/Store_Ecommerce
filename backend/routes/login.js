const express = require('express')

const router = express.Router()
const userModel = require('../models/userModel')

router.get('/', async (req, res) => {
    const user = await userModel.find({})
    if(user){
        return res.status(200).json({message: 'user found', user: user})
    }
    return res.status(401).json({message: 'Cannot find any user'})
})

router.post('/', async (req, res) => {
    try {
        const {email, password} = req.body
        console.log(req.body);
        const user = await userModel.findOne({email: email, password: password})
        if(user){
            console.log('User Existed');
            return res.status(200).json({message: 'user found', user: user})
        }
        return res.status(401).json({message: 'Cannot find any user'})
    }
    catch(err) {
        console.log(err);  
    }
    
    
})

module.exports = router