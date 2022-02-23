const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const ENGINE = config.db.engine;
let URI;

const options = {
  dialect: ENGINE,
  logging: config.env === 'prod' ? false: true,
}

if (config.env === 'prod') {
  URI = config.db[ENGINE].dbUrl;
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
} else {
  const USER = encodeURIComponent(config.db[ENGINE].user);
  const PASSWORD = encodeURIComponent(config.db[ENGINE].password);
  const HOST = config.db[ENGINE].host;
  const PORT = config.db[ENGINE].port;
  const DATABASE = config.db[ENGINE].database;
  URI = `${ENGINE}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;
}

const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

module.exports = sequelize;
