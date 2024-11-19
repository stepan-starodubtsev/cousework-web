const express = require('express');
const router = express.Router();
const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', getAllBooks);
router.get('/:id', getBook);
router.post('/', authMiddleware, createBook);
router.put('/:id', authMiddleware, updateBook);
router.delete('/:id', authMiddleware, deleteBook);

module.exports = router;
