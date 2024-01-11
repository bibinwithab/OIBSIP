const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcrypt')
const Users = require('../models/Users')

router.get('/', async(req,res)=>{
    const allUsers = await Users.find().select('-password').lean()
    if(!allUsers.length){
        return res.status(400).json({error: 'No users found'})
    }
    res.json(allUsers)
})

router.post('/register', async (req,res)=>{
    const {userName, password} = req.body

    const existingUser = await Users.findOne({ userName })
    if(existingUser){
        return res.status(400).json({error: 'User already exists'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new Users({userName, password: hashedPassword})
    await user.save();
    res.json(user)
})

router.post('/login', async (req,res)=>{
    const {userName, password} = req.body;
    const user = await Users.findOne({ userName });
    if(!user){
        return res.status(400).json({error: 'User does not exist'})
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if(!passwordMatch){
        return res.status(400).json({error: 'Password is incorrect'})
    }
    res.cookie('token', 'my-token', {httpOnly: true})
    res.json({message: 'Login successful'})
}
)

router.get('/logout', (req,res)=>{
    res.clearCookie('token')
    res.json({message: 'Logout successful'})
}
)

module.exports = router