// Require Modules
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const indexRoutes = require('./routes/index');
const customersRoutes = require('./routes/customers');
const port = process.env.PORT || 3000;

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

app.use(methodOverride('_method'));

// Mount Routes app.use()
app.use('/', indexRoutes);
app.use('/', customersRoutes);

// Tell app to listen
app.listen(port, '0.0.0.0')