require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  db: {
    engine: process.env.DATABASE_ENGINE || 'postgres',
    postgres : {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: process.env.POSTGRES_PORT || 6603,
      user: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'admin123',
      database: process.env.POSTGRES_DATABASE || 'socialapp'
    },
    mysql : {
      host: process.env.MYSQL_HOST || '127.0.0.1',
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'admin123',
      database: process.env.MYSQL_DATABASE || 'socialapp'
    }
  }
}

module.exports = { config };
