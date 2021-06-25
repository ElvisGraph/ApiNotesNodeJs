const express = require('express');
const Router = express.Router();

const {UserController} = require('../controllers')

Router.post('/', UserController.UserPost);
Router.get('/:id', UserController.UserGet);
Router.get('/all', UserController.UserGetAll);

module.exports = Router
