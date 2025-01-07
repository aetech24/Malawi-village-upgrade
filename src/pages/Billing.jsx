import React, { useEffect, useState } from "react";

const Billing = ({ shippingCost, onPlaceOrder }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dynamically import the products
    import("../constants/products").then((module) => {
      setProducts(module.products);
    });
  }, []);

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price.small, 0); // Default to small size price for now
  };

  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost;
  };

  return (
    <div className="min-h-screen max-md:mt-20 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
        {/* Billing Details Section */}
        <div className="bg-white p-6">
          <h2 className="text-4xl font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (optional)"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, etc. (optional)"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Town/City"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="State/Province"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveInfo"
                className="h-4 w-4 text-indigo-600"
              />
              <label htmlFor="saveInfo" className="ml-2 text-sm">
                Save this information for future checkout
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4 font-bold ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <span>{product.name}</span>
                </div>
                <span className="font-bold">${product.price.small.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between items-center font-semibold">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Shipping</span>
              <span>${shippingCost > 0 ? shippingCost.toFixed(2) : "Free"}</span>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  className="h-4 w-4 text-indigo-600"
                />
                <label htmlFor="bank" className="ml-2">
                  Bank Transfer
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  className="h-4 w-4 text-indigo-600"
                />
                <label htmlFor="cod" className="ml-2">
                  Cash on Delivery
                </label>
              </div>
            </div>

            <button
              className="w-full mt-6 bg-black text-white py-2 rounded-md text-center hover:bg-gray-800"
              onClick={onPlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;