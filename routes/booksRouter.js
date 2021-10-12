const express = require('express');

const BooksService = require('../services/BooksService')

const router = express.Router();

const service = new BooksService();

router.get('/', (req, res) => {
  const books = service.find();
  res.json(books)
})

/* static definitions must go first of dynamic(:xx) definitions */
router.get('/filter', (req, res) => {
  res.send("Hey from Filter")
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const book = service.findOne(id)
  
  res.json(book)
})

router.post('/', (req, res) => {
  const { body } = req
  const newBook = service.create(body)
  res.status(201).json(newBook)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { body } = req
  const book = service.update(id, body)
  res.json(book)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const response = service.delete(id)
  res.json(response)
})

module.exports = router
