// To keep passwords off the internet:
const mysql = require('mysql2');


require('dotenv').config();
 
const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    console.log(`Connected to the tracker_db database`)

);
connection.connect();
module.exports = connection;