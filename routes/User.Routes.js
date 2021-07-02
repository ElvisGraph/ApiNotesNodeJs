const express = require('express')
const Router = express.Router()
const {JWT_SECRET} = require('../config')


function TokenValidate(req, res, next) {
    const TokenHeaders = req.headers['authorization']
    const Token = TokenHeaders && TokenHeaders.split(' ')[1]
    console.log(Token)
    next();
}

// User Controller
const { UserController } = require('../controllers')

Router.get('/all', TokenValidate, UserController.FindAll)
Router.get('/:id', UserController.FindById)
Router.delete('/:id', UserController.DeleteById)

module.exports = Router
