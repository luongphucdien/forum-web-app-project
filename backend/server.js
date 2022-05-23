const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
app.listen(PORT, () => console.log('Connection success. API is running on port ' + PORT));


const db = require('./app/models');
const User = db.User;
db.sequelize.sync();


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);