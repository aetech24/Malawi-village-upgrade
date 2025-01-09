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
import { CartContext, CartProvider } from './context/CartContext';
import { WishlistContext } from './context/WishlistContext';

const App = () => {
  const shippingCost = 5.0;
  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert('Product added to cart!');
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
    alert('Product added to wishlist!');
  };

  return (
    <CartProvider>
      <WishlistContext.Provider value={{ wishlist, addToWishlist, setWishlist }}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/billing"
              element={<Billing shippingCost={shippingCost} onPlaceOrder={handlePlaceOrder} />}
            />
gleProduct />} />
            <Route path="/login" ele'ent={<'ogin />} />
            <Route path="/register" 'lement={<'egister />} />
            <Route path="/cart" elem'nt={<'art />} />
            <Route path="/wishlist" 'lement={<'ishlist />} />
            <Route path="/products" 'lement={<'llProducts />} />
          </Routes>
          <Footer />
        </div>
      </WishlistContext.Provider>
    </CartProvider>
  );
};

export default App;
