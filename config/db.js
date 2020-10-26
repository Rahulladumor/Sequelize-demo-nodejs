const { Sequelize } = require('sequelize');

module.exports = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
