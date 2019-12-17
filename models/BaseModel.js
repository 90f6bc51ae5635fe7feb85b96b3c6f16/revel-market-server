var mysql = require('mysql');

var connection = mysql.createConnection({
    connectionimit: 100,
    host: '192.168.0.129',
    user: 'admin',
    port: 3306, 
    password: 'root123456',
    database: 'revel-market_db',
    multipleStatements: true
}); 

connection.connect();

module.exports = connection;