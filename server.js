// Require Modules
const express = require('express');
const port = 3000;
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Load the env vars
require('dotenv').config();

// Set up express app
const app = express();

// Connect to DB
require('./config/database');

// Configure Express App app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount Routes app.use()
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Tell app to listen
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});