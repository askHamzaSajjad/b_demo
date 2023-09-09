const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbtlninh4xptua', 'Hamza', 'g9867542310', {
  host: '192.168.99.1',
  dialect: 'postgres',
});

module.exports = sequelize;
