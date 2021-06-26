const express = require('express')
const Router = express.Router()

const AuthRoutes = require('./Auth.Routes')
const UserRoutes = require('./User.Routes')
const NoteRoutes = require('./Note.Routes')

// Auth Routes
Router.use('/auth', AuthRoutes)

// User Routes
Router.use('/user', UserRoutes)
Router.use('/note', NoteRoutes)

module.exports = Router
