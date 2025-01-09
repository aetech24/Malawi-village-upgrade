import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create Wishlist Context
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Initialize wishlist from local storage if available
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const existingProduct = prevWishlist.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return prevWishlist;
      }
      return [...prevWishlist, { ...product }];
    });
    alert("Product added to wishlist!");
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  // Clear the wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Calculate total number of items in wishlist
  const totalItems = wishlist.length;

  // Save wishlist items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
