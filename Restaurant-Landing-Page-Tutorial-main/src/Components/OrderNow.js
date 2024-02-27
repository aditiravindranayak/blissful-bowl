// OrderNow.js

import React, { useState } from "react";
import FoodImage1 from "../Assets/food-image1.jpg";
import FoodImage2 from "../Assets/food-image2.jpg";
import FoodImage3 from "../Assets/food-image3.jpg";
import FoodImage4 from "../Assets/food-image4.jpg";
import FoodImage5 from "../Assets/food-image5.jpg";
import FoodImage6 from "../Assets/food-image6.jpg";
import FoodImage7 from "../Assets/food-image7.jpg";
import FoodImage8 from "../Assets/food-image8.jpg";

const OrderNow = ({ setCartCount }) => {
  const [cart, setCart] = useState([]);

  const foodItems = [
    {
      id: 1,
      image: FoodImage1,
      name: "Smoothie bowl topped with mango, raspberries, banana slices & mint",
      description: "Delight in a refreshing smoothie bowl adorned with vibrant mango, raspberries, banana slices, and a hint of fresh mint for a burst of fruity goodness.",
      price: 9.99,
    },
    {
      id: 2,
      image: FoodImage2,
      name: "Nourishing Buddha Bowl with Maple Roasted Chickpeas",
      description: "Savor the deliciousness of this nourishing Buddha bowl filled with maple-roasted chickpeas, avocado, and sweet potato for a delightful plant-based meal.",
      price: 12.99,
    },
    {
      id: 3,
      image: FoodImage3,
      name: "Veggie Nourish Bowl",
      description: "Homemade nourish bowls: my go-to for flavor-packed, satisfying meals—yesterday's creation was simply unbeatable!",
      price: 11.50,
    },
    {
      id: 4,
      image: FoodImage4,
      name: "Chickpea Flour Pancakes",
      description: "Elevate your breakfast game with these light, fluffy chickpea flour pancakes, perfect for a weekend treat with a vegan twist.",
      price: 8.99,
    },
    {
      id: 5,
      image: FoodImage5,
      name: "Roasted Sweet Potato + Kale Bowl",
      description: "Satisfy your cravings with this vibrant bowl of massaged kale, spicy chickpeas, roasted potatoes, tomatoes, and pomegranate seeds, drizzled with tangy lemon-tahini dressing.",
      price: 10.99,
    },
    {
      id: 6,
      image: FoodImage6,
      name: "Edamame, Avocado And Chickpea Buddha Bowl",
      description: "Experience a symphony of flavors with this Bowl, boasting a perfect balance of protein-rich ingredients and vibrant textures.",
      price: 13.50,
    },
    {
      id: 7,
      image: FoodImage7,
      name: "Sticky Sesame Chickpeas (vegan)",
      description: "Easy, flavorful, and packed with plant protein, this sesame vegan chickpea recipe is a quick and healthy dinner the whole family will love.",
      price: 9.75,
    },
    {
      id: 8,
      image: FoodImage8,
      name: "Korean chicken bowl with Rice",
      description: "Savor the convenience of this easy one-pan dinner featuring Korean chicken, mushrooms, and a flavorful gochujang dressing, ideal for a hassle-free and delicious meal.",
      price: 14.99,
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartCount(cart.length + 1);
  };
 
  return (
    <div className="order-now-container">
      <h1>Order Now</h1>

      <div className="food-items">
        {foodItems.map((item) => (
          <div className="food-item" key={item.id}>
            <img src={item.image} alt={`Food ${item.id}`} style={{ height: '260px', width: '260px' }} className="food-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderNow;

