const { config } = require('./../config/config');

const ENGINE = config.db.engine;
const USER = encodeURIComponent(config.db[ENGINE].user);
const PASSWORD = encodeURIComponent(config.db[ENGINE].password);
const HOST = config.db[ENGINE].host;
const PORT = config.db[ENGINE].port;
const DATABASE = config.db[ENGINE].database;
const URI = `${ENGINE}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

module.exports = {
  development: {
    url: URI,
    dialect: ENGINE,
  },
  production: {
    url: config.db[ENGINE].dbUrl,
    dialect: ENGINE,
    ssl: {
      rejectUnauthorized: false
    }
  }
}
