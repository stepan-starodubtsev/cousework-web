const { DataTypes } = require('sequelize');
const sequelize = require('../settings/settingsDB');

const News = sequelize.define('News', {
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = News;
