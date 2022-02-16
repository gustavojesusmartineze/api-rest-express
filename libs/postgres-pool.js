const { Pool } = require('pg');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.db.postgres.user);
const PASSWORD = encodeURIComponent(config.db.postgres.password);
const HOST = config.db.postgres.host;
const PORT = config.db.postgres.port;
const DATABASE = config.db.postgres.database;
const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const pool = new Pool({ connectionString: URI });

module.exports = {
  pool
};
