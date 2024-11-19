const express = require('express');
const router = express.Router();
const { getAllNews, getNews, createNews, updateNews, deleteNews } = require('../controllers/newsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', getAllNews);
router.get('/:id', authMiddleware, getNews);
router.post('/', authMiddleware, createNews);
router.put('/:id', authMiddleware, updateNews);
router.delete('/:id', authMiddleware, deleteNews);

module.exports = router;
