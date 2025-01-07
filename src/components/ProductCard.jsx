import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ProductCard = ({ product, className = "" }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the favorite icon
    setIsFavorite(!isFavorite);
  };

  // Format price based on whether it's a string or an object
  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return `GH¢ ${price}`;
    } else if (typeof price === 'object' && price !== null) {
      return `GH¢ ${price.small} - ${price.big}`;
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
      <div className="w-full cursor-pointer bg-black text-white p-2 text-center">
        Add to cart
      </div>
      <div className="py-4">
        <p>{product.name}</p>
        <p>{formatPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
