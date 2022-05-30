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
    // Drop tables to prevent conflicts in creating new table
    var query = 'DROP TABLE IF EXISTS threads, users;';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Drop tables succesfully');
    });

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
            +   'thread_id int not null primary key auto_increment,'
            +   'content varchar(1000) not null,'
            +   'username varchar(30) not null,'                  
            +   'created_date varchar(30),'                     // Fix later
            +   'foreign key (username) references users(username)'
            +   ') AUTO_INCREMENT = 1;';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Created threads table succesfully');
    });

    // Insert testing values into users
    var query = 'INSERT INTO users (name, username, password) ' 
            +   'VALUES ' 
            +   '(\'Wanda Maximoff\', \'wanda\', \'$2a$08$Ra7B0fycE4R5Ng4JZFGWZO7vHxrBqvMMTc/G4o0O43y1ACShBMteu\'), '
            +   '(\'Testing\', \'apple\', \'$2a$08$Ra7B0fycE4R5Ng4JZFGWZO7vHxrBqvMMTc/G4o0O43y1ACShBMteu\'), ' 
            +   '(\'loc\', \'loc\', \'$2a$08$Ra7B0fycE4R5Ng4JZFGWZO7vHxrBqvMMTc/G4o0O43y1ACShBMteu\');';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Insert values to users succesfully');
    });

    // Insert testing values into threads
    var query = 'INSERT INTO threads (content, username, created_date) ' 
            +   'VALUES ' 
            +   '(\'This is the 1st post of wanda\', \'wanda\', \'1/5/2022 15:15:15\'), '
            +   '(\'This is the 1st post of apple\', \'apple\', \'29/5/2022 16:18:20\'), ' 
            +   '(\'This is the 2nd post of apple\', \'apple\', \'30/5/2022 1:23:45\'), '
            +   '(\'This is the 1st post of loc\', \'loc\', \'1/6/2022 5:43:21\'), '
            +   '(\'Today is a great day to do presentation\', \'loc\', \'2/6/2022 5:10:15\');';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Insert values to threads succesfully');
    });
};