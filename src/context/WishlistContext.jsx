import React, { createContext, useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

export const WishlistContext = createContext();

const STORAGE_KEY = 'malawi_village_wishlist';

export const WishlistProvider = ({ children }) => {
  // Initialize wishlist from localStorage with enhanced error handling
  const [wishlist, setWishlist] = useState(() => {
    try {
      const storedWishlist = localStorage.getItem(STORAGE_KEY);
      if (!storedWishlist) return [];
      
      const parsedWishlist = JSON.parse(storedWishlist);
      return Array.isArray(parsedWishlist) ? parsedWishlist : [];
    } catch (error) {
      console.error("Error loading wishlist from localStorage:", error);
      return [];
    }
  });

  // Memoized function to save to localStorage
  const saveToLocalStorage = useCallback((items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error saving wishlist to localStorage:", error);
    }
  }, []);

  // Update localStorage whenever wishlist changes
  useEffect(() => {
    saveToLocalStorage(wishlist);
  }, [wishlist, saveToLocalStorage]);

  // Add item to wishlist with validation
  const addToWishlist = useCallback((item) => {
    if (!item || !item.id) {
      console.error("Invalid item format");
      return;
    }

    setWishlist((prevItems) => {
      if (!prevItems.some((existingItem) => existingItem.id === item.id)) {
        const newWishlist = [...prevItems, item];
        return newWishlist;
      }
      return prevItems;
    });
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = useCallback((itemId) => {
    if (!itemId) {
      console.error("Invalid item ID");
      return;
    }

    setWishlist((prevItems) => {
      const newWishlist = prevItems.filter((item) => item.id !== itemId);
      return newWishlist;
    });
  }, []);

  // Clear entire wishlist
  const clearWishlist = useCallback(() => {
    setWishlist([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Check if item is in wishlist
  const isInWishlist = useCallback((itemId) => {
    return wishlist.some((item) => item.id === itemId);
  }, [wishlist]);

  return (
    <WishlistContext.Provider 
      value={{ 
        wishlist, 
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
