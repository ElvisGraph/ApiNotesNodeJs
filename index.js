const express = require('express')
const Server = express()
const { PORT, APPLICATION_NAME } = require('./config')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const Router = require('./routes/index')
const { NotFound } = require('./middlewares')

// Middelwares
Server.use(express.json())
Server.use(helmet())
Server.use(express.urlencoded({ extended: false }))
Server.use(morgan('dev'))

// Routes
Server.use('/api', Router)

// Static
Server.use(express.static(path.join(__dirname, 'public')))

// Manejo de Errores
Server.use(NotFound)

Server.listen(PORT, () => {
  console.log(`${APPLICATION_NAME} | ${PORT}`)
})
