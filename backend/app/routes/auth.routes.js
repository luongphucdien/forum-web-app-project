const { verifySignup } = require('../middleware');
const controller = require('../controller/auth.controller');


module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next()
    });

    app.post('/auth/sign-up', [verifySignup.checkDuplicate], controller.signup);

    app.post('/auth/sign-in', controller.signin);
};