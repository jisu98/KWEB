const express = require('express');
const router = express.Router();

const booksCtrl = require('./books.ctrl');

router.get('/', booksCtrl.readBooks);

router.get('/rent', booksCtrl.readRentedBooks);

router.get('/:id', booksCtrl.readBooksById);

router.get('/title/:title', booksCtrl.readBooksByTitle);

router.post('/', booksCtrl.insertBook);

router.put('/:id', booksCtrl.changeIsRent);

router.delete('/:id', booksCtrl.deleteBook);

module.exports = router;