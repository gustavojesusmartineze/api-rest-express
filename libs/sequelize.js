const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.db.postgres.user);
const PASSWORD = encodeURIComponent(config.db.postgres.password);
const HOST = config.db.postgres.host;
const PORT = config.db.postgres.port;
const DATABASE = config.db.postgres.database;
const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

module.exports = {
  sequelize
}
