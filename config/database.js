const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/userInfo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});