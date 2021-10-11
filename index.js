const express = require('express');
const routerApi = require('./routes'); /* index.js is called automatically */

const app = express();
const port = 3000;

//express native middleware
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello, world!');
})

app.get('/categories/:categoryId/books/:bookId', (req, res) => {
	const { categoryId, bookId } = req.params
	res.json({
		categoryId,
		bookId
	})
})

app.listen(port, () => {
	console.log(`server listening at ${port}`);
});

routerApi(app)
