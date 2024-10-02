const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the URI from the .env file
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for the cart items
const cartSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 }
});

const Cart = mongoose.model('Cart', cartSchema);

// POST endpoint to add an item to the cart
app.post('/api/cart/add', async (req, res) => {
  try {
    const { id, name, description, price, image } = req.body;

    // Save the cart item to MongoDB
    const newCartItem = new Cart({ id, name, description, price, image });
    await newCartItem.save();

    res.status(201).json({ message: 'Item added to cart successfully', item: newCartItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// GET endpoint to retrieve all cart items
app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find(); // Retrieve all items from the Cart collection
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// DELETE endpoint to remove an item from the cart by id
app.delete('/api/cart/remove/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findOneAndDelete({ id: id });

    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// POST endpoint to handle order submission
app.post('/api/order', async (req, res) => {
  try {
    const { cartItems, totalPrice } = req.body;
    // Here you would typically save the order data to your database
    // For example:
    const newOrder = new Order({ cartItems, totalPrice });
    await newOrder.save();
    
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
