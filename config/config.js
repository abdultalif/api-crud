require('dotenv').config();
const {
  DB_HOSTNAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_DIALECT
} = process.env;

module.exports =
{
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT
  }
}
