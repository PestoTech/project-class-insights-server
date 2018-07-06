import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_DIALECT: process.env.DB_DIALECT || 'mongo',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || '27017',
  DB_NAME: process.env.DB_NAME || 'classinsights',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/classinsights',
  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'yourencrpytionhere',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '12h',
};