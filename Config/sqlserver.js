const mysql_connection = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root2005',
  database: 'NFT Backend'
});

module.exports = pool;