const { Pool } = require('pg');

const { config } = require('./../config/config');

const options = {};

if (config.env === 'prod') {
  options.connectionString = config.db.postgres.dbUrl;
  options.ssl =  {
    rejectUnauthorized: false
  };
} else {
  const USER = encodeURIComponent(config.db.postgres.user);
  const PASSWORD = encodeURIComponent(config.db.postgres.password);
  const HOST = config.db.postgres.host;
  const PORT = config.db.postgres.port;
  const DATABASE = config.db.postgres.database;
  const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;
  options.connectionString = URI;
}


const pool = new Pool(options);

module.exports = {
  pool
};
