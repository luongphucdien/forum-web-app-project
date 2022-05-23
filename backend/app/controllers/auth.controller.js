const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).catch(error => {
        res.status(500).send({ message: error.message });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        where: { username: req.body.username }
    }).then(user => {
        if (!user)
            return res.status(404).send({ message: 'User not found!' });

        const pwIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!pwIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: 'Password is invalid!'
            });
        }
            
        const token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 });

        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        }).catch(error => {
            res.status(500).send({ message: error.message });
        });
    });
};