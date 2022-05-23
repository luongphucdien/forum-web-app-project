const db = require("../models");

const User = db.user;


const checkCredentials = (req, res, next) => {
    // Check username
    User.findOne({ where: { username: req.body.username } }).then(user => {
        if (user) {
            res.status(400).send({ message: 'Username is already taken!' });
            return;
        }

        // Check email
        User.findOne({ where: { email: req.body.email } }).then(user => {
            if (user) {
                res.status(400).send({ message: 'Email is already in use!' });
                return;
            }
            next();
        });
    });
};


const verifySignup = {
    checkCredentials: checkCredentials   
};
module.exports = verifySignup;