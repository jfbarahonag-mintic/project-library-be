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
  res.status(201).json({
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
