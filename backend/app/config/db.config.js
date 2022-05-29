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
    // Initiate users table
    var query = 'create table if not exists users('
            +   'name varchar(30) not null,'
            +   'username varchar(30) not null primary key,'
            +   'password varchar(100) not null'
            +   ')';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Created users table succesfully');
    });

    // Initiate threads table
    query = 'create table if not exists threads('
            +   'thread_id int not null primary key,'
            +   'content varchar(1000) not null,'
            +   'username varchar(30) not null,'                  
            +   'created_date varchar(30) not null,'                     // Fix later
            +   'foreign key (username) references users(username)'
            +   ')';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Created threads table succesfully');
    });
};