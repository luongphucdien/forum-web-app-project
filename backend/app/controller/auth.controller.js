const config = require('../config/auth.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { connection } = require('../config/db.config');

exports.signup = (req, res) => {
    const signupInfo = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    };

    // Query to add user to db
    var query = '';
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
};


exports.signin = (req, res) => {
    var query = 'select * from users where username = ' + '"' + req.body.username + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;

        if (!result.length) {
            return res.status(404).send({ message: 'User not found!' });
        }
        
        const password = result[0].password;
        const pwIsValid = bcrypt.compareSync(req.body.password, password);
        if (!pwIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: 'Invalid password'
            });
        };

        const id = result[0].id;
        const token = jwt.sign({ id: id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: id,
            accessToken: token
        });
    });
};