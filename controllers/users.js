const User = require('../models/user');

module.exports = {
    new: newUser,
    create
}

function create(req, res) {
    const user = new User(req.body);
    user.save(function(err) {
        if(err) return res.render('users/new');
        console.log(user);
        res.redirect('/users/new');
    });
}

function newUser(req, res) {
    res.render('users/new');
}