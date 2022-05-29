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
    var query = 'select * from threads';
    connection.query(query, (error, result) => {
        if (error) throw error;
        return res.status(200).send(result);
    });
};