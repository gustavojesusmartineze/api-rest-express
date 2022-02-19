const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const ENGINE = config.db.engine;
const USER = encodeURIComponent(config.db[ENGINE].user);
const PASSWORD = encodeURIComponent(config.db[ENGINE].password);
const HOST = config.db[ENGINE].host;
const PORT = config.db[ENGINE].port;
const DATABASE = config.db[ENGINE].database;
const URI = `${ENGINE}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const sequelize = new Sequelize(URI, {
  dialect: ENGINE,
  logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
