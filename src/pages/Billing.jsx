import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import ScrollToTop from "../components/ScrollToTop";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

// Initialize Stripe with the publishable key
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
if (!stripePublishableKey) {
  console.error("Stripe publishable key is not defined in .env file");
  toast.error("Payment configuration error. Please contact support.");
}

const stripePromise = stripePublishableKey
  ? loadStripe(stripePublishableKey)
  : null;

const Billing = ({ shippingCost, onPlaceOrder }) => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  // Calculate order subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculate order total including shipping
  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate required form fields
  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.phone ||
      !formData.email
    ) {
      toast.warn("Please fill in all required fields");
      return false;
    }
    return true;
  };

  // Handle order placement
  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      if (paymentMethod === "stripe") {
        if (!stripePromise) {
          toast.error(
            "Stripe is not initialized. Please check payment configuration."
          );
          setIsProcessing(false);
          return;
          }
          const stripe = await stripePromise;

        // Create a simple test checkout session with hardcoded price
        const response = await fetch(
          "https://api.stripe.com/v1/checkout/sessions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${import.meta.env.VITE_STRIPE_SECRET_KEY}`,
            },
            body: new URLSearchParams({
              "payment_method_types[]": "card",
              "line_items[0][price_data][currency]": "usd",
              "line_items[0][price_data][product_data][name]": "Pay Order",
              "line_items[0][price_data][unit_amount]": Math.round(
                calculateTotal() * 100
              ).toString(),
              "line_items[0][quantity]": "1",
              mode: "payment",
              success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${window.location.origin}/checkout`,
              customer_email: formData.email,
              billing_address_collection: "required",
            }),
          }
        );
        clearCart();

        const session = await response.json();

        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error("Stripe Checkout error:", result.error);
          alert(`Payment error: ${result.error.message}`);
        }
      } else {
        onPlaceOrder();
        clearCart();
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen md:p-20 md:-mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
        {/* Billing Details Section */}
        <div className="bg-white p-6">
          <h2 className="text-4xl font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company Name (optional)"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              value={formData.company}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address *"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, Suite, etc. (optional)"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              value={formData.apartment}
              onChange={handleInputChange}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="Town/City *"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State/Province *"
                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                className="h-4 w-4 text-indigo-600"
                checked={formData.saveInfo}
                onChange={handleInputChange}
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
            {/* Order items */}
            {cartItems.map((item) => (
              <div
                key={item.id + item.size}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4 font-bold">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <span>
                    {item.name} ({item.size})
                  </span>
                </div>
                <span className="font-bold">$ {item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between items-center font-semibold">
              <span>Subtotal</span>
              <span>$ {calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Shipping</span>
              <span>
                $ {shippingCost > 0 ? shippingCost.toFixed(2) : "Free"}
              </span>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total</span>
              <span>$ {calculateTotal().toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="space-y-4">
              {/* Payment method  */}
              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="h-4 w-4 text-indigo-600"
                  />
                  <label htmlFor="bank" className="ml-2">
                    Bank Transfer
                  </label>
                </div>
                {paymentMethod === "bank" && (
                  <div className="mt-2 text-sm text-gray-600">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="h-4 w-4 text-indigo-600"
                  />
                  <label htmlFor="cod" className="ml-2">
                    Cash on Delivery
                  </label>
                </div>
                {paymentMethod === "cod" && (
                  <div className="mt-2 text-sm text-gray-600">
                    Pay with cash upon delivery.
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="stripe"
                    name="paymentMethod"
                    value="stripe"
                    checked={paymentMethod === "stripe"}
                    onChange={() => setPaymentMethod("stripe")}
                    className="h-4 w-4 text-indigo-600"
                  />
                  <label htmlFor="stripe" className="ml-2">
                    Credit/Debit Card (Stripe)
                  </label>
                </div>
                {paymentMethod === "stripe" && (
                  <div className="mt-2 text-sm text-gray-600">
                    Pay securely using your credit or debit card through Stripe.
                  </div>
                )}
              </div>
            </div>

            <button
              className={`w-full mt-6 bg-black text-white py-3 rounded-md text-center hover:bg-gray-800 transition-colors ${
                isProcessing ? "opacity-70 cursor-not-allowed" : ""
              }`}
              onClick={handlePlaceOrder}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </button>

            {paymentMethod === "stripe" && (
              <div className="mt-4 text-xs text-gray-500">
                <p>
                  By clicking "Place Order", you will be redirected to Stripe to
                  complete your payment securely.
                </p>
                <p className="mt-1 font-semibold">
                  Test Card: 4242 4242 4242 4242
                </p>
                <p className="text-xs">Use any future date and CVC</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

Billing.propTypes = {
  shippingCost: PropTypes.number.isRequired,
  onPlaceOrder: PropTypes.func.isRequired,
};

export default Billing;
