const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'alany',
  password: '12345678',
  database: 'rest_exercicios'
});

module.exports = connection;