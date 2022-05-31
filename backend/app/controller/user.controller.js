const { connection } = require("../config/db.config");

exports.publicContent = (req, res) => {
    // Query to fetch all threads
    var query = 'select * from threads';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.send(result);
    });
};

exports.userContent = (req, res) => {
    const id = req.body.id;

    // Query to fetch threads based on user id here'
    var query = 'select * from threads where username = '+ '"' + id + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.send(result);
    });
};


exports.authenticate = (req, res) => {
    const id = req.body.id;
    if (id) {
        return res.status(200).send({
            id: id,
            message: 'Authorized!'
        });
    }
    return res.status(403).send({
        id: null,
        message: 'Unauthorized!'
    });
};


exports.getComments = (req, res) => {
    const thread_id = req.query.thread_id;
    console.log(thread_id);

    var query = 'select * from comments where thread_id = "' + thread_id + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log(result);
        return res.status(200).send(result);
    });
};


exports.post = (req, res) => {
    const username = req.body.username;
    const post = req.body.post;

    const now = new Date();
    const date = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate() + ' ' 
            +    now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    
    var query = "INSERT INTO threads (content, username, created_date) VALUES ('"+ post +"', '" + username + "', '" + date + "')";
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send('Created new thread successfully!');
    });
};


exports.deleteThread = (req, res) => {
    const thread_id = req.body.thread_id;

    var query = 'DELETE FROM threads WHERE thread_id=\'' + thread_id + '\'';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send('Thread deleted successfully!');
    });
}


exports.comment = (req, res) => {
    const username = req.body.username;
    const comment = req.body.comment;
    const thread_id = req.body.thread_id;

    const now = new Date();
    const date = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear() + ' ' 
            +    now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    var query = 'insert into comments (thread_id, comment, username, comment_date) values'
            +   '("' + thread_id + '","' + comment + '","' + username + '","' + date + '")';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send('Created new comment successfully!');
    });
}


exports.deleteComment = (req, res) => {
    const comment_id = req.body.comment_id;

    var query = 'delete from comments where comment_id = ' + '"' + comment_id + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send('Deleted comment successfully!');
    });
}