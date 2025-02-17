const Tracking = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen shadow-lg mt-10">
      <h1 className="font-bold text-center mb-4 text-4xl my-2">
        Order Tracking
      </h1>
      <div className="flex flex-col justify-center  p-10 w-full max-w-lg gap-4 ">
        <p className="text-gray-700 text-xl text-center mb-2 w-full">
          To check the status of your order, please enter your Order ID in the
          field below and click the &quot;Track&quot; button. You can find your
          Order ID on your receipt or in the confirmation email sent to you.
        </p>
        <form className="flex flex-col justify-center p-10 w-full max-w-lg gap-2">
          <div className="mb-6">
            <input
              type="text"
              id="orderID"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-none"
              placeholder="Order ID"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="billingEmail"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-none"
              placeholder="Billing email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 group hover:bg-yellow transition duration-200 hover:text-black"
          >
            Track
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tracking;
