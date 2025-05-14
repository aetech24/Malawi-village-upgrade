import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';

// Create Wishlist Context
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Initialize wishlist from local storage if available
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Add item to wishlist
  const addToWishlist = (product, showNotification = true) => {
    setWishlist((prevWishlist) => {
      const existingProduct = prevWishlist.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        if (showNotification) {
          toast.info(`${product.name} is already in your wishlist`);
        }
        return prevWishlist;
      }
      if (showNotification) {
        toast.success(`${product.name} added to wishlist!`);
      }
      return [...prevWishlist, { ...product }];
    });
    return `${product.name} added to wishlist!`;
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId, showNotification = true) => {
    setWishlist((prevWishlist) => {
      const removedProduct = prevWishlist.find(item => item.id === productId);
      if (removedProduct && showNotification) {
        toast.info(`${removedProduct.name} removed from wishlist`);
      }
      return prevWishlist.filter((item) => item.id !== productId);
    });
    return 'Product removed from wishlist';
  };

  // Clear the wishlist
  const clearWishlist = () => {
    setWishlist([]);
    toast.info('Wishlist cleared');
    return 'Wishlist cleared';
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