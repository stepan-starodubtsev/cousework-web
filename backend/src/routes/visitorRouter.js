const express = require('express');
const router = express.Router();
const { getAllVisitors, getVisitor, createVisitor, updateVisitor, deleteVisitor } = require('../controllers/visitorController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getAllVisitors);
router.get('/:id', authMiddleware, getVisitor);
router.post('/', authMiddleware, createVisitor);
router.put('/:id', authMiddleware, updateVisitor);
router.delete('/:id', authMiddleware, deleteVisitor);

module.exports = router;
