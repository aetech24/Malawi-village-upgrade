import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../constants/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  
  // Find the current product based on the ID
  const product = products.find(p => p.id === parseInt(id));
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products.filter(p => 
    p.category === product?.category && p.id !== product?.id
  ).slice(0, 4);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return `GH¢ ${price}`;
    } else if (typeof price === 'object' && price !== null) {
      return `GH¢ ${price.small} - ${price.big}`;
    }
    return 'Price not available';
  };

  // Sample images for the swiper (you can modify this based on your needs)
  const images = [product.image];

  return (
    <div className='px-4 md:px-10 py-5 max-md:mt-16'>
      <h1 className='text-4xl py-5'>Single Product</h1>
      <div className='flex flex-col lg:flex-row items-center justify-between md:gap-16 gap-6 py-6'>
        <img src={product.image} alt={product.name} className="w-full lg:w-1/2 h-[400px] object-cover rounded-lg" />
        <div className='flex flex-col gap-6 lg:w-1/2'>
          <p className='text-2xl font-semibold'>{product.name}</p>
          <p>{product.description}</p>
          <p className='font-semibold text-2xl'>{formatPrice(product.price)}</p>
          {typeof product.price === 'object' && (
            <select className='border px-4 py-3 border-black outline-none'>
              <option value="small">Small - GH¢ {product.price.small}</option>
              <option value="big">Large - GH¢ {product.price.big}</option>
            </select>
          )}
          <div className='flex flex-col gap-3'>
            <button className='bg-yellow px-6 py-2 text-center'>Add to cart</button>
            <button className='bg-black text-white px-6 py-2 text-center'>Add to wishlist</button>
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      {images.length > 1 && (
        <div className='my-10 w-full lg:w-[48%]'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={3}
            navigation
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Product ${index + 1}`} className="w-full h-[170px] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Tabs Section */}
      <div className='my-10 flex flex-col md:flex-row w-full items-start md:gap-16 gap-6'>
        <div className='flex md:flex-col flex-row gap-4 border-gray-200'>
          <button
            className={`px-6 md:w-60 py-2 ${activeTab === 'description' ? 'border-b-2 border-black bg-gray-100 p-2' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`px-6 md:w-60 py-2 ${activeTab === 'ingredients' ? 'border-b-2 border-black bg-gray-100 p-2' : ''}`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
        </div>
        
        <div className='md:py-6'>
          {activeTab === 'description' ? (
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-semibold mb-4'>Product Description</h3>
              <p>{product.description}</p>
            </div>
          ) : (
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-semibold mb-4'>Ingredients</h3>
              <ul className='list-disc pl-6'>
                {product.ingredients ? (
                  product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))
                ) : (
                  <>
                    <li>Natural fruit extract</li>
                    <li>Purified water</li>
                    <li>Natural sweeteners</li>
                    <li>Vitamin C</li>
                    <li>Natural preservatives</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className='mt-16 mb-10'>
          <div className='flex items-center gap-2 mb-8'>
            <div className='h-10 w-4 rounded-md bg-black'></div>
            <h2 className='text-2xl font-semibold'>Related Products</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;