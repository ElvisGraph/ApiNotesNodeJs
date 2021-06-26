const express = require('express')
const Router = express.Router()
const { body } = require('express-validator')

// User Controller
const { UserController } = require('../controllers')

Router.get('/all', UserController.FindAll)
Router.get('/:id', UserController.FindById)
Router.delete('/:id', UserController.DeleteById)

module.exports = Router
