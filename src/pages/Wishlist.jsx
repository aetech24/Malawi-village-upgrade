import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

<ProductCard />

const Wishlist = () => {
  // Sample wishlist items state
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Product Name 1", price: 120.0, image: "./src/assets/image-1.jpg" },
    { id: 2, name: "Product Name 2", price: 120.0, image: "./src/assets/image-2.jpg" },
    { id: 3, name: "Product Name 3", price: 120.0, image: "./src/assets/image-3.jpg" },
  ]);

  const [cart, setCart] = useState([]);

  // Add an item to the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setWishlistItems((prevItems) => prevItems.filter((wishlistItem) => wishlistItem.id !== item.id));
  };

  // Remove an item from the wishlist
  const handleRemove = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Move all items to the cart
  const handleMoveAllToCart = () => {
    setCart((prevCart) => [...prevCart, ...wishlistItems]);
    setWishlistItems([]);
  };

  return (
   
    <div className="lg:p-10 max-lg:mt-20 py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Favorites ({wishlistItems.length})</h1>
      <div className="flex flex-wrap gap-6">
        {wishlistItems.map((item) => (
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
              <p className="text-gray-500">GH₵{item.price.toFixed(2)}</p>
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
      {wishlistItems.length > 0 && (
        <button
          onClick={handleMoveAllToCart}
          className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
        >
          Move All to Cart
        </button>
      )}
    </div>
    
  );
};

export default Wishlist;