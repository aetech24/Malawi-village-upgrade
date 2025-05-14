import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import ScrollToTop from "../components/ScrollToTop";
import { toast } from 'react-toastify';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  // Add an item to the cart
  const handleAddToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
    toast.success(`${item.name} moved to cart!`);
  };

  // Remove an item from the wishlist
  const handleRemove = (id) => {
    const item = wishlist.find(item => item.id === id);
    removeFromWishlist(id);
    toast.info(`${item?.name || 'Item'} removed from favorites`);
  };

  // Move all items to the cart
  const handleMoveAllToCart = () => {
    if (wishlist.length === 0) {
      toast.info('Your favorites list is empty');
      return;
    }
    
    wishlist.forEach((item) => {
      addToCart(item);
    });
    clearWishlist();
    toast.success(`All ${wishlist.length} items moved to cart!`);
  };

  // Format price based on whether it's a string or an object
  const formatPrice = (price) => {
    if (typeof price === "string") {
      return `$${parseFloat(price).toFixed(2)}`;
    } else if (typeof price === "object" && price !== null) {
      const prices = Object.values(price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      return minPrice === maxPrice 
        ? `$${minPrice.toFixed(2)}` 
        : `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
    }
    return "Price not available";
  };

  return (
    <div className="lg:p-10 max-lg:mt-20 py-8 px-4 md:mt-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Favorites ({wishlist.length})</h1>
        {wishlist.length > 0 && (
          <button
            onClick={handleMoveAllToCart}
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition text-sm md:text-base"
          >
            Move All to Cart
          </button>
        )}
      </div>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg mb-4">Your favorites list is empty</p>
          <a 
            href="/products" 
            className="text-yellow hover:underline font-medium"
          >
            Browse products
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-2 right-2 bg-white/80 text-red-500 p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
                  aria-label="Remove from favorites"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold line-clamp-1">{item.name}</h2>
                <p className="text-gray-500 my-2">{formatPrice(item.price)}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Wishlist;