const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUser);
router.post('/', authMiddleware, createUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
