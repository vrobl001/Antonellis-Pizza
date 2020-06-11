const Blog = require('../models/blog');
const Customer = require('../models/customer');

module.exports = {
  new: newBlog,
  create,
  index,
  edit,
  update,
  deleteBlog,
};

function deleteBlog(req, res) {
    blogToBeDeleted = Blog.findById(req.params.id);
    Blog.deleteOne(blogToBeDeleted, function (err, blog) {
      if (err) throw err;
      console.log('blog deleted');
      res.redirect('/blogs');
    });
  }

function update(req, res) {
  blog = Blog.findById(req.params.id);
  Blog.updateOne(blog, req.body, function (err, blog) {
    if (err) {
      return res.redirect('/blogs/:id/edit');
    }
    res.redirect('/blogs');
  });
}

function edit(req, res) {
  Blog.findById(req.params.id, function (err, blog) {
    res.render('blogs/edit', { 
      blog: blog, 
      user: req.user,
    });
  });
}


function index(req, res) {
  Blog.find({}, function (err, blogs) {
    res.render('blogs/index', {
      blogs,

    });
  });
}

function create(req, res) {
  const blog = new Blog(req.body);
  blog.save(function (err) {
    if (err) return res.render('blogs/new');
    res.redirect('/blogs');
  });
}

function newBlog(req, res) {
  res.render('blogs/new');
}
