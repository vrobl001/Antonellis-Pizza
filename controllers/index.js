module.exports = {
    index
}

function index(req, res, next) {
    User.find({}, function(err, users) {
     res.render('users/index', {
      users,
      user: req.user
      });
   })
}
  