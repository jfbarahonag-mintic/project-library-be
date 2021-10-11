const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello, world!');
})

app.get('/books', (req, res) => {
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

app.get('/books/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		id,
		title: 'Akelarre',
		author: 'Mario Mendoza',
		price: 20000
	})
})

app.get('/categories/:categoryId/books/:bookId', (req, res) => {
	const { categoryId, bookId } = req.params
	res.json({
		categoryId,
		bookId
	})
})

app.get('/users', (req, res) => {
	const { email, pswd } = req.query

	/* validating query params */
	if (email && pswd) {
		res.json({
			email,
			pswd
		})
	} else {
		res.send('Error validating params')
	}
})

app.listen(port, () => {
	console.log(`server listening at ${port}`);
});
