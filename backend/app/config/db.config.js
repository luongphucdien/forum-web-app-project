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
    var query = 'DROP TABLE IF EXISTS threads, users, comments';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Drop tables succesfully');
    });

    // Initiate users table
    query = 'create table if not exists users('
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
            +   'created_date varchar(30) not null,'                     
            +   'foreign key (username) references users(username)'
            +   ') AUTO_INCREMENT = 1;';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Created threads table succesfully');
    });

    // Initiate comments table
    query = 'CREATE TABLE IF NOT EXISTS comments('
            +   'comment_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,'
            +   'thread_id INT NOT NULL,'
            +   'username VARCHAR(30) NOT NULL,'
            +   'content VARCHAR(1000) NOT NULL,'
            +   'create_date VARCHAR(30),'
            +   'FOREIGN KEY (thread_id) REFERENCES threads(thread_id),'
            +   'FOREIGN KEY (username) REFERENCES users(username)'
            +   ') AUTO_INCREMENT = 1;';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Created comments table succesfully');
    });


    // Insert testing values into users
    query = 'INSERT INTO users (name, username, password) ' 
            +   'VALUES ' 
            +   '(\'Wanda Maximoff\', \'wanda\', \'$2a$08$Ra7B0fycE4R5Ng4JZFGWZO7vHxrBqvMMTc/G4o0O43y1ACShBMteu\'), '
            +   '(\'Testing\', \'apple\', \'$2a$08$Ra7B0fycE4R5Ng4JZFGWZO7vHxrBqvMMTc/G4o0O43y1ACShBMteu\'), ' 
            +   '(\'loc\', \'loc\', \'$2a$08$Ra7B0fycE4R5Ng4JZFGWZO7vHxrBqvMMTc/G4o0O43y1ACShBMteu\');';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Insert values to users succesfully');
    });

    // Insert testing values into threads
    query = 'INSERT INTO threads (content, username, created_date) ' 
            +   'VALUES ' 
            +   '(\'This is the 1st post of wanda\', \'wanda\', \'2022/5/1 15:15:15\'), '
            +   '(\'This is the 1st post of apple\', \'apple\', \'2022/5/29 16:18:20\'), ' 
            +   '(\'This is the 2nd post of apple\', \'apple\', \'2022/5/30 1:23:45\'), '
            +   '(\'This is the 1st post of loc\', \'loc\', \'2022/6/1 5:43:21\'), '
            +   '(\'Today is a great day to do presentation\', \'loc\', \'2022/6/2 5:10:15\');';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Insert values to threads succesfully');
    });

    // Insert comments
    query = 'INSERT INTO comments (thread_id, username, content, create_date) VALUES '
        +   '(\'5\', \'wanda\', \'test\', \'2022/5/1 15:15:15\'),'
        +   '(\'5\', \'apple\', \'Comment from apple\', \'2022/6/1 5:43:21\'),'
        +   '(\'4\', \'loc\', \'this is a comment\', \'2022/5/30 1:23:45\'),'
        +   '(\'3\', \'wanda\', \'another comment\', \'2022/5/30 1:23:45\'),'
        +   '(\'2\', \'loc\', \'bla bla bla\', \'2022/5/11 1:23:45\'),'
        +   '(\'1\', \'apple\', \'Comment\', \'2022/5/23 1:23:45\'),'
        +   '(\'5\', \'wanda\', \'Lmao, I hate this\', \'2022/6/1 15:23:45\')'
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log('Insert testing values for comments successfully');
    });
};