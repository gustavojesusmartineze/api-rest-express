require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  db: {
    postgres : {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: process.env.POSTGRES_PORT || 6603,
      user: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'mysqllocalnew',
      database: process.env.POSTGRES_DATABASE || 'socialapp'
    }
  }
}

module.exports = { config };
