const express = require('express');
const Router = express.Router();

const UserRoutes = require('./User.Routes')
const NoteRoutes = require('./Note.Routes')

// User Route
Router.use('/user', UserRoutes)
Router.use('/note', NoteRoutes)

module.exports = Router;
