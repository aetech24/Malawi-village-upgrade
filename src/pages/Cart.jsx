import React, { useState, useEffect } from "react";

const Cart = () => {
  // Sample cart items state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product Name 1", size: "L", price: 10.23, quantity: 1, image: "./src/assets/image-1.jpg" },
    { id: 2, name: "Product Name 2", size: "L", price: 10.23, quantity: 1, image: "./src/assets/image-2.jpg" },
    { id: 3, name: "Product Name 3", size: "L", price: 10.23, quantity: 1, image: "./src/assets/image-3.jpg" },
    { id: 4, name: "Product Name 4", size: "L", price: 10.23, quantity: 1, image: "./src/assets/image-4.jpg" },
  ]);

  const discount = 150;
  const delivery = 150;

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update the quantity of a product
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
      )
    );
  };

  // Delete a product from the cart
  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="lg:p-10 px-4 max-lg:mt-16">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-4 text-left">Your items</th>
                  <th className="border-b p-4 text-left">Price</th>
                  <th className="border-b p-4 text-left">Quantity</th>
                  <th className="border-b p-4 text-left">Subtotal</th>
                  <th className="border-b p-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 mr-4" />
                      <div>
                        <div>{item.name}</div>
                        <div className="text-sm text-gray-500">Size: {item.size}</div>
                      </div>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-12 text-center border rounded"
                      />
                    </td>
                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4 text-red-500 cursor-pointer" onClick={() => handleDelete(item.id)}>
                      🗑️
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile View */}
          <div className="block md:hidden space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                <div className="flex-1">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-gray-500">Size: {item.size}</div>
                  <div className="flex items-center mt-2">
                    <span className="mr-2">Qty:</span>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 text-center border rounded"
                    />
                  </div>
                  <div className="mt-2 font-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 text-lg cursor-pointer ml-4"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Order Summary */}
        <div className="w-full md:w-1/3 border p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Your Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${(subtotal - discount + delivery).toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded">
            Proceed to Checkout
          </button>
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
