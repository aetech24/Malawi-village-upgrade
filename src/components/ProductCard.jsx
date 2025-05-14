import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product, className = "" }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToWishlist } = useContext(WishlistContext);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    addToWishlist(product);
  };

  const handleViewProduct = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  // Improved price formatting function
  const formatPrice = (price) => {
    if (!price) return "Price not available";
    
    if (typeof price === "string") {
      return `$${parseFloat(price).toFixed(2)}`;
    } 
    
    if (typeof price === "object" && price !== null) {
      // Handle both {small: x, big: y} and {size1: x, size2: y} formats
      const prices = Object.values(price);
      if (prices.length === 0) return "Price not available";
      
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      
      return minPrice === maxPrice 
        ? `$${minPrice.toFixed(2)}` 
        : `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
    }
    
    return "Price not available";
  };

  return (
    <div
      className={`rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className} cursor-pointer relative`}
      onClick={handleClick}
    >
      <div
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? (
          <AiFillHeart className="text-red-500 text-xl" />
        ) : (
          <AiOutlineHeart className="text-gray-600 text-xl" />
        )}
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 font-semibold">
          {formatPrice(product.price)}
        </p>
      </div>
      <div
        className="w-full cursor-pointer bg-black hover:bg-opacity-80 duration-200 text-white p-2 text-center"
        onClick={handleViewProduct}
      >
        View Product
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        small: PropTypes.number,
        big: PropTypes.number,
      }),
      PropTypes.object
    ]).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default ProductCard;