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
    addressT: String, 
    address: String,
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
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('User', userSchema);