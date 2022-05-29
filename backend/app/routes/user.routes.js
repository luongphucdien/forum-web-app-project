const { authJWT } = require('../middleware');
const controller = require('../controller/user.controller');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/content/public', controller.publicContent);

    app.get('/content/user', authJWT.verifyToken, controller.userContent);

    app.get('/content/auth', authJWT.verifyToken, controller.authenticate);

    app.post('/content/post', controller.post);
};