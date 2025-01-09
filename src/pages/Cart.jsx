import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const discount = 150;
  const delivery = 150;
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subtotal = cartItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ) || 0;

  return (
    <div className="lg:p-10 px-4 max-lg:mt-16">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      <div className="flex flex-col flex-wrap">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4"></h2>
          {cartItems.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-4 text-left">Your items</th>
                  <th className="border-b p-4 text-left">Size</th>
                  <th className="border-b p-4 text-left">Price</th>
                  <th className="border-b p-4 text-left">Quantity</th>
                  <th className="border-b p-4 text-left">Subtotal</th>
                  <th className="border-b p-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id + item.size} className="border-b">
                    <td className="p-4 flex items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 mr-4" />
                      <div>{item.name}</div>
                    </td>
                    <td className="p-4">{item.size}</td>
                    <td className="p-4">GH¢ {Number(item.price).toFixed(2)}</td>
                    <td className="p-4">
                      <input
                        type="number"
                        value={isNaN(item.quantity) ? "1" : item.quantity.toString()}
                        min="1"
                        onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value) || 1)}
                        className="w-12 text-center border rounded"
                      />
                    </td>
                    <td className="p-4">GH¢ {(Number(item.price) * item.quantity).toFixed(2)}</td>
                    <td
                      className="p-4 text-red-500 cursor-pointer"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      🗑️
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        {/* Order Summary */}
        <div className="w-full md:w-1/3 border p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Your Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>GH¢ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>GH¢ {discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>GH¢ {delivery.toFixed(2)}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>GH¢ {(subtotal - discount + delivery).toFixed(2)}</span>
          </div>
          <Link to="/billing">
            <button className="mt-4 w-full bg-black hover:bg-opacity-30 duration-200 text-white py-2 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow text-black p-2 rounded-full"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Cart;