const { connection } = require("../config/db.config");

exports.publicContent = (req, res) => {
    // Query to fetch all threads
    var query = 'select * from thread';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send(result);
    });
};

exports.userContent = (req, res) => {
    const id = req.body.id;

    // Query to fetch threads based on user id here'
    var query = 'select * from threads';
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
    
    var query = "INSERT INTO threads (content, username) VALUES ('"+ post +"', '" + username + "')";
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send(result);
    });
    console.log(username, post);
};