import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
// import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const ProductCard = ({ product, className = "" }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToWishlist } = useContext(WishlistContext);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the favorite icon
    setIsFavorite(!isFavorite);
    addToWishlist(product);
  };

  const handleViewProduct = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the view product button
    navigate(`/product/${product.id}`);
  };

  // Format price based on whether it's a string or an object
  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return `$ ${price}`;
    } else if (typeof price === 'object' && price !== null) {
      return `$ ${price.small} - ${price.big}`;
    }
    return 'Price not available';
  };

  return (
    <div 
      className={`rounded-md ${className} cursor-pointer relative`}
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
      <div 
        className="w-full cursor-pointer bg-black hover:bg-opacity-30 duration-200 text-white p-2 text-center"
        onClick={handleViewProduct}
      >
        View Product
      </div>
      <div className="py-4">
        <p>{product.name}</p>
        <p>{formatPrice(product.price)}</p>
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
      PropTypes.shape({
        small: PropTypes.number,
        big: PropTypes.number,
      }),
    ]).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default ProductCard;
