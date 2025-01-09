import React, { createContext, useState, useEffect } from "react";

// Create Cart Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from local storage if available
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Add item to cart
  const addToCart = (product, size = "small") => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id && item.size === size);
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item to cart
      return [...prevItems, { ...product, size, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id, size) => {
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id === id && item.size === size)));
  };

  // Update quantity of a product
  const updateQuantity = (id, size, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: quantity > 0 ? quantity : 1 }
          : item
      )
    );
  };

  // Calculate total cart value
  const totalValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate total number of items
  const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Save cart items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalValue,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};