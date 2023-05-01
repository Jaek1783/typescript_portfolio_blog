require('dotenv').config();

const fs = require('fs');


const data = fs.readFileSync('./db/db.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PW,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME
})

db.connect();
module.exports = db;
