// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

let seq;

if (process.env.JAWSDB_URL) {
    seq = new Sequelize(process.env.JAWSDB_URL);
} else {
    seq = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = seq;