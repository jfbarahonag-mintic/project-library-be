const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
	const { limit } = req.query

  const size = limit || 5
  
  const books = []
  for (let index = 0; index < size; index++) {
    books.push({
      title: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(books);
})

/* static definitions must go first of dynamic(:xx) definitions */
router.get('/filter', (req, res) => {
  res.send("Hey from Filter")
})

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		id,
		title: 'Akelarre',
		author: 'Mario Mendoza',
		price: 20000
	})
})

router.post('/', (req, res) => {
  const { body } = req
  res.json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { body } = req

  res.json({
    message: 'updated',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  
  res.json({
    message: 'deleted',
    id,
  })
})

module.exports = router
