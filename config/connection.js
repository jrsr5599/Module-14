
const Sequelize = require("sequelize");

require('dotenv').config();

const sequelize = process.env.BLOG_URL
 new Sequelize(process.env.BLOG_URL)
 new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
  });

module.exports = sequelize;