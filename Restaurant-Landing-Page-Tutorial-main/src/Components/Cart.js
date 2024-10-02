import React, { useEffect, useState } from 'react';
import './Cart.css'; // Ensure your CSS is imported

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State for total price

  useEffect(() => {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => {
        const updatedItems = updateCartItems(data);
        setCartItems(updatedItems);
        calculateTotalPrice(updatedItems);
      })
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  // Consolidate quantities of the same product
  const updateCartItems = (items) => {
    const itemMap = {};

    items.forEach(item => {
      if (itemMap[item.id]) {
        itemMap[item.id].quantity += item.quantity; // Consolidate quantity
      } else {
        itemMap[item.id] = { ...item };
      }
    });

    return Object.values(itemMap);
  };

  // Calculate total price based on cart items
  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(total);
  };

  // Function to handle quantity change
  const updateQuantity = (id, change) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity >= 0) {
            return { ...item, quantity: newQuantity }; // Only update if quantity is non-negative
          }
        }
        return item;
      }).filter(item => item.quantity > 0); // Remove item if quantity is 0
    });
  };

  // Function to handle item removal
  const removeItem = (id) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      calculateTotalPrice(updatedItems); // Recalculate total price
      return updatedItems;
    });
  };

  // Use Effect to recalculate total price whenever cartItems change
  useEffect(() => {
    calculateTotalPrice(cartItems);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="item-price">${item.price.toFixed(2)} each</p>
              <p className="item-total-price">Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <div className="quantity-controls">
                <button className="control-button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button className="control-button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3> {/* Display total price */}
    </div>
  );
};

export default Cart;
