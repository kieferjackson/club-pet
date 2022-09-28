const Sequelize = require('sequelize');
require('dotenv').config();

// TODO: Replace these environment with credentials through JawsDB
const sequelize = new Sequelize
(
    process.env.DB_NAME,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;