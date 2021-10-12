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

  create() {

  }

  find() {
    return this.books
  }

  findOne(id) {
    return this.books.find(item => item.id === id)
  }

  update() {

  }

  delete() {

  }
}

module.exports = BooksService
