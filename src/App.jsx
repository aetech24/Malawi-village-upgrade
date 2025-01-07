import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Billing from './pages/Billing';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/login';
import Register from './pages/Register';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist';

const App = () => {
  // Props for the Billing component
  const shippingCost = 5.0;

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
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
        <Route path='/product' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;