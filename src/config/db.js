const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'S.C2025@mlll.',
    database: 'ecommerce_db',
    port: 3306
});

module.exports = pool;