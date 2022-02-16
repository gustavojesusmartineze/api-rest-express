const { Client } = require('pg');

const pool = new Client({
  host: 'localhost',
  port: 5432,
  user: 'storeuser',
  password: 'admin123',
  database: 'storeapp'
});

pool.connect();

module.exports = {
  pool
};
