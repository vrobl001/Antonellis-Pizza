module.exports = {
    new: newUser
}

function newUser(req, res) {
    res.render('users/new');
}