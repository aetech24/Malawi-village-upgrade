import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { WishlistContext } from './WishlistContextFile';

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
      </WishlistContext.Provider>
    );
  };

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
