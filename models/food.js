const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: String,
    category: {
      type: String,
      enum: [
        'STARTERS & SIDES',
        'WINGS',
        'SALADS',
        'PIZZA & TURNOVERS',
        'PASTAS',
        'WRAPS',
        'SUBS',
        'SANDWICHES',
        'KIDS',
        'DESSERTS',
        'BEVERAGES',
        'BEER & WINE',
      ],
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    catering: Boolean,
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
module.exports = mongoose.model('Food', foodSchema);
