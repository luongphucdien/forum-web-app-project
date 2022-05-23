const { authJWT } = require("../middleware");
const controller = require('../controllers/user.controller');


module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/content/public', controller.publicAccess);
    app.get('/content/user', [authJWT.verifyToken], controller.userAccess);
};