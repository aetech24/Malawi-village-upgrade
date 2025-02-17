import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Billing from "./pages/Billing";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import ScrollToTop from "./components/ScrollToTop";
import Tracking from "./pages/Tracking";

const App = () => {
  const shippingCost = 5.0;
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/billing"
              element={
                <Billing
                  shippingCost={shippingCost}
                  onPlaceOrder={handlePlaceOrder}
                />
              }
            />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>

          <Footer />
          <ScrollToTop />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
