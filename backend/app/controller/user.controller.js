const { connection } = require("../config/db.config");

exports.publicContent = (req, res) => {
    // Query to fetch all threads
    var query = 'select * from threads';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send(result);
    });
};

exports.userContent = (req, res) => {
    const id = req.body.id;

    // Query to fetch threads based on user id here'
    var query = 'select * from threads where username = '+ '"' + id + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send(result);
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


exports.post = (req, res) => {
    const username = req.body.username;
    const post = req.body.post;

    const now = new Date();
    const date = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
    
    var query = "INSERT INTO threads (content, username, created_date) VALUES ('"+ post +"', '" + username + "', '" + date + "')";
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send(result);
    });
    console.log(username, post);
};