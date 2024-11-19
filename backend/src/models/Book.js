const { DataTypes } = require('sequelize');
const sequelize = require('../settings/settingsDB');
const Visitor = require('./Visitor');

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.ENUM('Фентезі', 'Наукова фантастика', 'Таємниця', 'Мелодрама', 'Художня література', 'Історичний', 'Трилер', 'Жахи'),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Видана на руки', 'В наявності'),
        allowNull: false
    }
});

Book.belongsTo(Visitor, {
    foreignKey: 'borrowerId',
    as: 'borrower'
});

module.exports = Book;
