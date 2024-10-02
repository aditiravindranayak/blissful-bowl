const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
