const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    phone: Number,
    signUpDate: {
        type: Date,
        default: Date.now
    },
    addressName: String,
    addressT: String, 
    location: String,
    apt: String,
    city: String,
    state: {
        type: String,
        default: "VA"
    },
    zip: {
        type: Number,
        default: "22079"
    },
    deliveryNotes: String,
    googleId: String
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Customer', customerSchema);