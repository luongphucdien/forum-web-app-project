const { connection } =  require("../config/db.config");

const checkDuplicate = (req, res, next) => {
    // Query to find username
    var query = 'select username from users where username =' + '"' + req.body.username + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;
        if (result.length)
            return res.status(400).send(result);
        next();
    });

};

const verifySignup = {
    checkDuplicate: checkDuplicate
};
module.exports = verifySignup;