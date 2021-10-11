const booksRouter = require('./booksRouter')
const usersRouter = require('./usersRouter')

function routerApi(app) {
  app.use('/api/books', booksRouter)
  app.use('/api/users', usersRouter)
}

module.exports = routerApi
