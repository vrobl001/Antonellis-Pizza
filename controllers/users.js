const User = require('../models/user');

module.exports = {
    new: newUser,
    create,
    index
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', {
            users
        });
    });
}

function create(req, res) {
    const user = new User(req.body);
    user.save(function(err) {
        if(err) return res.render('users/new');
        console.log(user);
        res.redirect('/users');
    });
}

function newUser(req, res) {
    res.render('users/new');
}