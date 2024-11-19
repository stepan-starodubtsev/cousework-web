const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.createUser = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = await User.create({
            email,
            password: bcrypt.hashSync(password, 10),
            role // Додано поле ролі
        });
        user.password = ""; // Не повертати пароль
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password, role } = req.body;

    try {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.email = email;
        if (password) {
            user.password = bcrypt.hashSync(password, 10);
        }
        if (role) {
            user.role = role; // Додано оновлення ролі
        }

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();
        res.json({ message: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
