import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [isCartValid, setIsCartValid] = useState(true);

  const discount = 0;
  const delivery = 0;

  const subtotal =
    cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  // Calculate total number of products (sum of all quantities)
  const totalProducts = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  // Minimum order requirement is now based on total products (6 or more)
  const MINIMUM_ORDER_QUANTITY = 1;

  // Validate cart whenever items change
  useEffect(() => {
    setIsCartValid(totalProducts >= MINIMUM_ORDER_QUANTITY);
  }, [cartItems, totalProducts]);

  // Handle quantity change
  const handleQuantityChange = (id, size, newQuantity) => {
    const quantity = parseInt(newQuantity) || 1;
    const message = updateQuantity(id, size, quantity);
    if (message) {
      if (message === 'Quantity updated') {
        toast.success(message);
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <div className="lg:p-10 px-4 max-lg:mt-16 md:-mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center lg:text-left">
        Your Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.length > 0 ? (
            <div>
              <div className="hidden md:block">
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
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 mr-4"
                          />
                          <div>{item.name}</div>
                        </td>
                        <td className="p-4">{item.size}</td>
                        <td className="p-4">$ {Number(item.price)}</td>
                        <td className="p-4">
                          <input
                            type="number"
                            value={item.quantity}
                            min={1}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                item.size,
                                e.target.value
                              )
                            }
                            className="w-20 text-center border rounded "
                          />
                        </td>
                        <td className="p-4">
                          $ {(Number(item.price) * item.quantity).toFixed(2)}
                        </td>
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
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id + item.size}
                    className="flex flex-col p-4 border rounded-lg shadow"
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 mr-4"
                      />
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          Size: {item.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>$ {Number(item.price)}</span>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            item.size,
                            e.target.value
                          )
                        }
                        className="w-16 text-center border rounded"
                      />
                      <span>$ {(Number(item.price) * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-500"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center">Your cart is empty</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Your Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>$ {discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>$ {delivery.toFixed(2)}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$ {(subtotal - discount + delivery).toFixed(2)}</span>
          </div>
          <div className="mt-2 text-sm">
            <p>Total Items: {totalProducts}</p>
            {!isCartValid && (
              <p className="text-red-500">
                Minimum order requirement: {MINIMUM_ORDER_QUANTITY} items
              </p>
            )}
          </div>
          <Link to="/billing">
            <button 
              className={`mt-4 w-full bg-black hover:bg-opacity-30 duration-200 text-white py-2 rounded ${
                !isCartValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isCartValid}
            >
              {isCartValid ? 'Proceed to Checkout' : 'Add more items to checkout'}
            </button>
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Cart;