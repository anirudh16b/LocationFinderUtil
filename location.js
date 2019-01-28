const mysql = require('mysql');
const fs = require('fs');
const dbConfig = require('./dbConfig.json')

var connection = mysql.createPool({
    connectionLimit: dbConfig.pool,
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

var txnsql = 'SELECT location from location where name = ?';

connection.getConnection((err, connection) => {
    if (err) { res.send('Error in DB connection: ' + err) }

    connection.query(txnsql, keyword, (error, results, fields) => {
        if (error) { throw error }
        else {
            var key = results;
        }
    })
    connection.release();
})
