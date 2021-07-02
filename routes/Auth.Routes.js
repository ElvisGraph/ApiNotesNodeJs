const express = require('express')
const Router = express.Router()
const { body } = require("express-validator");

// Controller
const { Signin, Signup } = require('../controllers/Auth')

// 
Router.post('/signup',

    // Validate Username
    body('username').isAlphanumeric().withMessage({ message: 'Invalid user name' }),

    // Validate Email
    body('email')
    .isEmail()
    .withMessage({ message: 'Email is invalid' }),

    // Validate Password
    body('password')
    .isLength({ min: 6 })
    .withMessage({ message: 'The password must contain more than 5 characters.' }),
    
    Signup)

Router.post('/signin', Signin)

module.exports = Router