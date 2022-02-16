const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'storeuser',
    password: 'admin123',
    database: 'storeapp'
  });

  await client.connect();

  return client;
}

module.exports = getConnection;
