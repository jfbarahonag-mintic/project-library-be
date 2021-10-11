const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello, world!');
})

app.get('/books', (req, res) => {
	res.json([{
			ISBN: '1',
			title: 'Sherlock Holmes',
			author: 'Arthur Conan Doyle',
			price: 10000
		},
		{
			ISBN: '2',
			title: 'El olvido que seremos',
			author: 'Hector Abad',
			price: 20000
		},
		{
			ISBN: '3',
			title: 'Akelarre',
			author: 'Mario Mendoza',
			price: 20000
		},
	]);
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
