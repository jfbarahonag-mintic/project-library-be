const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
	const { limit } = req.query

	if (limit) {
		const books = []
		for (let index = 0; index < limit; index++) {
			books.push({
				title: faker.commerce.productName(),
				price: parseInt(faker.commerce.price(), 10),
				image: faker.image.imageUrl(),
			})
		}
		res.json(books);
	}
	else {
		res.status(400).send('Missing Limit param')
	}
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

module.exports = router
