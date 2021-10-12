const faker = require('faker');

class BooksService {

  constructor() {
    this.books = []
    this.generate()
  }

  generate() {
    const limit = 100
    for (let idx = 0; idx < limit; idx++) {
      this.books.push({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
  }

  create(data) {
    const newBook = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.books.push(newBook)
    return newBook
  }

  find() {
    return this.books
  }

  findOne(id) {
    return this.books.find(item => item.id === id)
  }

  update(id, changes) {
    const idx = this.books.findIndex(book => book.id === id)

    if (idx === -1) {
      throw new Error('Book not found')
    }
    const book = this.books[idx]
    this.books[idx] = {
      ...book, //persist the attributes of the book
      ...changes //apply all new changes
    }
    return this.books[idx]
  }

  delete(id) {
    const idx = this.books.findIndex(book => book.id === id)

    if (idx === -1) {
      throw new Error('Book not found')
    }
    this.books.splice(idx, 1)

    return {
      id
    }
  }
}

module.exports = BooksService
