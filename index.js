const express = require("express");
const Server = express();
const {PORT, APPLICATION_NAME} = require("./config");
const morgan = require('morgan')
const Router = require('./routes/index');
const {NotFound} = require('./middlewares')

Server.use(express.json())
Server.use(express.urlencoded({extended: false}))
Server.use(morgan('dev'))

// Routes
Server.use("/api", Router);

// Manejo de Errores
Server.use(NotFound)

Server.listen(PORT, () => {
  console.log(`${APPLICATION_NAME} | ${PORT}`);
});
