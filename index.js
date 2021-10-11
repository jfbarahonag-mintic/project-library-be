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

app.listen(port, () => {
	console.log(`server listening at ${port}`);
});
