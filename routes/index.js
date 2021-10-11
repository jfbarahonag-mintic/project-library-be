const express = require('express');
const booksRouter = require('./booksRouter')
const usersRouter = require('./usersRouter')

const router = express.Router();

function routerApi(app) {
  app.use('/api', router)
  router.use('/books', booksRouter)
  router.use('/users', usersRouter)
}

module.exports = routerApi
