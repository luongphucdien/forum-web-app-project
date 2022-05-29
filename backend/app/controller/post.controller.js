const { connection } = require("../config/db.config");

exports.post = (req, res) => {
    const content = req.body.post;
    const username = req.body.username;

    // Query to fetch all threads
    var query = "INSERT INTO thread (content, username) VALUES ('"+ content +"', '" + username + "')";
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send(result);
    });
};