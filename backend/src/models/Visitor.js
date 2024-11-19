const { DataTypes } = require('sequelize');
const sequelize = require('../settings/settingsDB');

const Visitor = sequelize.define('Visitor', {
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Visitor;
