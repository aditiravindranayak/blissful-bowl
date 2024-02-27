import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={`Food ${item.id}`} style={{ height: '100px', width: '100px' }} />
              <div>
                <h2>{item.name}</h2>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
