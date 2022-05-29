const express = require('express');
const cors = require('cors');
const { connect, initiate } = require('./app/config/db.config');
const app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
};

connect();
initiate();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
app.listen(PORT, () => console.log('Connection success. API is running on port ' + PORT));


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);