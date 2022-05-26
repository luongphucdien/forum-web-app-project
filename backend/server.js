const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

var corsOptions = {
    origin: 'http://localhost:8080'
};

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3366,
    password: 'secret',
    database: 'forum'
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Connected');
});

// Initiate tables (if not exists) 
var query = 'create table if not exists users('
            +   'id int auto_increment primary key,'
            +   'name varchar(30) not null,'
            +   'username varchar(30) not null,'
            +   'password varchar(30) not null'
            +   ')'
connection.query(query, (error, result) => {
    if (error) throw error;
    console.log('Success');
});
// Repeat the codes for the other tables here

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
app.listen(PORT, () => console.log('Connection success. API is running on port ' + PORT));