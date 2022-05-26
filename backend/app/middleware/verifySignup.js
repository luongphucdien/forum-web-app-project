const connection =  require("../config/db.config");

const checkDuplicate = (req, res, next) => {
    // Query to find username
    var query = 'select username from users where username =' + '"' + req.body.username + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;
        if (result)
            return res.status(400).send({message: 'Username is already in use!'});
    });

    // Query to find email
    query = 'select email from users where username =' + '"' + req.body.email + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;
        if (result)
            return res.status(400).send({message: 'Email is already in use!'});
    });

    next();
};

const verifySignup = {
    checkDuplicate: checkDuplicate
};
module.exports = verifySignup;