const mysql = require("mysql2");
require("dotenv").config();
const { DB_LOGIN, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_LOGIN,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

module.exports = { db };
