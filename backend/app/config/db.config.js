const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3366,
    password: 'secret',
    database: 'forum'
});

exports.connection = connection;

exports.connect = () => {
    connection.connect((error) => {
        if (error) throw error;
        console.log('Connected');
    });
};

exports.initiate = () => {
    var query = 'create table if not exists users('
            +   'name varchar(30) not null,'
            +   'username varchar(30) not null primary key,'
            +   'password varchar(30) not null'
            +   ')';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Success');
    });
};