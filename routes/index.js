const booksRouter = require('./booksRouter')
const usersRouter = require('./usersRouter')

function routerApi(app) {
  app.use('/books', booksRouter)
  app.use('/users', usersRouter)
}

module.exports = routerApi
