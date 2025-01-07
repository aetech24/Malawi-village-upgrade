import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, className = "" }) => {
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
    <div className={`rounded-md ${className}`}>
      {/* <Link to={`/product/${product.id}`}> */}
        <img
          src={product.image} 
          alt={product.name}
          className="w-full h-[200px] object-cover"
        />
      {/* </Link> */}
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
