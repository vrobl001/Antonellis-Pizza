// Require Modules
const express = require('express');
const port = process.env.PORT || 3000;
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Load the env vars
require('dotenv').config();

// Set up express app
const app = express();

// Connect to DB
require('./config/database');
require('./config/passport');

// Configure Express App app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'LJDBxZ82Gsrx5o5OabC7rLTp',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Mount Routes app.use()
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Tell app to listen
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});