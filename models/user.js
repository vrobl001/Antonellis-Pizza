const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    phone: Number,
    signUpDate: {
        type: Date,
        default: Date.now
    },
    addressName: String,
    addressType: String,
    address: String,
    apt: String,
    city: String,
    state: String,
    zip: Number,
    deliveryNotes: String,
});

// Compile the schema into a model and export it
module.exports = mongoose.model('User', userSchema);