const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: String,
    category: String,
    price: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
module.exports = mongoose.model('Food', foodSchema);
