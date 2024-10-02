const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Cart', cartSchema);
