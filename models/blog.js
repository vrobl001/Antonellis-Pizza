const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
module.exports = mongoose.model('Blog', blogSchema);
