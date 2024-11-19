const { DataTypes } = require('sequelize');
const sequelize = require('../settings/settingsDB');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('ADMIN', 'USER'),
        allowNull: false
    }
});

module.exports = User;
