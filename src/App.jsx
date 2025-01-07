import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Billing from './pages/Billing';

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
<<<<<<< HEAD
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
=======
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/billing"
          element={<Billing shippingCost={shippingCost} onPlaceOrder={handlePlaceOrder} />}
        />
>>>>>>> e989363cc7d9f17f288bb95cc0b28d18335ae287
      </Routes>
      <Footer />
    </div>
  );
};

export default App;