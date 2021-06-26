const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.send('Note GET')
})

Router.post('/', (req, res) => {
  res.send('Note POST')
})

Router.get('/:id', (req, res) => {
  res.send('Note GET Only One')
})

Router.delete('/:id', (req, res) => {
  res.send('Note DELETE Only One')
})

Router.patch('/:id', (req, res) => {
  res.send('Note PATCH Only One')
})

module.exports = Router
