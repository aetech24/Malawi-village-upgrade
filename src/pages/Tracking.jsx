import React from "react";

const Tracking = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Order Tracking</h1>
        <p className="text-gray-700 text-base text-center mb-8">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <form>
          <div className="mb-6">
            <input
              type="text"
              id="orderID"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Order ID"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="billingEmail"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Billing email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Track
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tracking;
