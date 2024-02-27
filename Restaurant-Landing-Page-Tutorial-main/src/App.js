import React, { useState } from "react"; // Import useState from React
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import OrderNow from "./Components/OrderNow";
import BowlBuilder from "./Components/BowlBuilder"; 

import Cart from "./Components/Cart"; // Import the Cart component

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonial">Testimonials</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/ordernow"
            element={<OrderNow cart={cart} setCart={setCart} />}
          /> 
          <Route path="/bowlbuilder" element={<BowlBuilder />} /> {/* Add Route for BowlBuilder */}
          <Route
            path="/cart"
            element={<Cart cart={cart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

