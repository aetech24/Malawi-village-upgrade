import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Billing from './pages/Billing';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Register from './pages/Register';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
// import { AuthProvider } from "./context/AuthContext";
// import ProductCard from './components/ProductCard';

const App = () => {
  // Props for the Billing component
  const shippingCost = 5.0;

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    console.log("Added to cart:", product);
  };

  return (
    <div>
      <Navbar />
      {/* Add your routing here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/billing"
          element={<Billing shippingCost={shippingCost} onPlaceOrder={handlePlaceOrder} />}
        />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/products' element={<AllProducts onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;