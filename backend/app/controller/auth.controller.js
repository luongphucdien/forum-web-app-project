const config = require('../config/auth.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { connection } = require('../config/db.config');

exports.signup = (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, 8);

    // console.log(name, username, password);

    // Query to add user to db
    var query = "INSERT INTO users (name, username, password) VALUES ('"+ name +"', '" + username + "', '" + password + "')"
    connection.query(query, (error, result) => {
        if (error) throw error;
        console.log(result);
        return res.status(200).send('New user added!');
    });
};


exports.signin = (req, res) => {
    var query = 'select * from users where username = ' + '"' + req.body.username + '"';
    connection.query(query, (error, result) => {
        if (error) throw error;

        if (!result.length) {
            return res.status(404).send('User not found!');
        }
        
        const password = result[0].password;
        const pwIsValid = bcrypt.compareSync(req.body.password, password);
        if (!pwIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: 'Invalid password'
            });
        };

        const username = result[0].username;
        const token = jwt.sign({ id: username }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            username: username,
            accessToken: token
        });
    });
};