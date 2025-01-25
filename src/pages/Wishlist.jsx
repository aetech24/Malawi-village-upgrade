import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import ScrollToTop from '../components/ScrollToTop';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  // Add an item to the cart
  const handleAddToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  // Remove an item from the wishlist
  const handleRemove = (id) => {
    removeFromWishlist(id);
  };

  // Move all items to the cart
  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart(item);
    });
    clearWishlist();
  };

  // Format price based on whether it's a string or an object
  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return `GH₵${parseFloat(price).toFixed(2)}`;
    } else if (typeof price === 'object' && price !== null) {
      return `GH₵${price.small} - GH₵${price.big}`;
    }
    return 'Price not available';
  };

  return (
    <div className="lg:p-10 max-lg:mt-20 py-8 px-4 md:mt-6">
      <h1 className="text-2xl font-bold mb-6">Favorites ({wishlist.length})</h1>
      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-2 right-2 bg-white text-red-500 p-1 rounded-full shadow hover:bg-red-500 hover:text-white transition"
                  >
                    🗑️
                  </button>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-500">{formatPrice(item.price)}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleMoveAllToCart}
            className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Move All to Cart
          </button>
        </>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Wishlist;