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
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id && item.size === product.size);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === product.size ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert('Product added to cart!');
  };

  // Remove item from cart
  const removeFromCart = (productId, size) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // Update quantity of a product
  const updateQuantity = (productId, size, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
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
        clearCart,
        totalValue,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};