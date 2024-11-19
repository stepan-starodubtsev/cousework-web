const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("library_db", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('MySQL connected...'))
    .catch(err => console.log('Error: ' + err + " " + "localhost" + ":" + 3306));

module.exports = sequelize;
