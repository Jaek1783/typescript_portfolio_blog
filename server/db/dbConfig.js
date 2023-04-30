const fs = require('fs');

const data = fs.readFileSync('./db/db.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const db = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
})

db.connect();
module.exports = db;
