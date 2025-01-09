import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext"; // Assuming you have a CartContext
import { WishlistContext } from "../context/WishlistContext"; // Assuming you have a WishlistContext

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Access addToCart from context
  const { addToWishlist } = useContext(WishlistContext); // Access addToWishlist from context
  const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState(Object.keys(products[0].price)[0]); // Default to the first size

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  // Related products: same category, excluding the current product
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  // Fallback for invalid product
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  // Format price based on type
  const formatPrice = (price) => {
    if (typeof price === "string") {
      return `$${price}`;
    } else if (typeof price === "object" && price !== null) {
      return `$${Object.values(price).join(" - $")}`;
    }
    return "Price not available";
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      size: selectedSize,
      price: product.price[selectedSize],
      quantity: 1, // Default quantity when adding to cart
    };
    addToCart(productToAdd);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  // Swiper images: Ensure valid array
  const images = Array.isArray(product.images) && product.images.length > 0 ? product.images : [product.image];

  // Truncate description to first 200 characters
  const truncatedDescription = product.description.length > 200 
    ? product.description.substring(0, 200) + '...'
    : product.description;

  return (
    <div className='px-4 md:px-10 py-5 max-md:mt-16'>
      <h1 className='text-4xl py-5'>Single Product</h1>
      <div className='flex flex-col lg:flex-row items-center justify-between md:gap-16 gap-6 py-6'>
        <img src={product.image} alt={product.name} className="w-full lg:w-1/2 h-[400px] object-cover rounded-lg" />
        <div className='flex flex-col gap-6 lg:w-1/2'>
          <p className='text-2xl font-semibold'>{product.name}</p>
          <p>{truncatedDescription}</p>
          <p className='font-semibold text-2xl'>{formatPrice(product.price)}</p>
          {typeof product.price === 'object' && (
            <select
              className='border px-4 py-3 border-black outline-none'
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {Object.keys(product.price).map((size) => (
                <option key={size} value={size}>
                  {size.charAt(0).toUpperCase() + size.slice(1)} - GH¢ {product.price[size]}
                </option>
              ))}
            </select>
          )}
          <div className='flex flex-col gap-3'>
            <button className='bg-yellow hover:bg-opacity-30 px-6 py-2 text-center' onClick={handleAddToCart}>Add to cart</button>
            <button className='bg-black hover:bg-opacity-30 text-white px-6 py-2 text-center' onClick={handleAddToWishlist}>Add to wishlist</button>
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      {images.length > 1 && (
        <div className="my-10 w-full lg:w-[48%]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product Slide ${index + 1}`}
                  className="w-full h-[170px] object-cover rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Tabs Section */}
      <div className="my-10 flex flex-col md:flex-row w-full items-start md:gap-16 gap-6">
        <div className="flex md:flex-col flex-row gap-4 border-gray-200">
          <button
            className={`px-6 md:w-60 py-2 ${
              activeTab === "description" ? "border-b-2 border-black bg-gray-100 p-2" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-6 md:w-60 py-2 ${
              activeTab === "ingredients" ? "border-b-2 border-black bg-gray-100 p-2" : ""
            }`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>

        <div className="md:py-6">
          {activeTab === "description" ? (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p>{product.description}</p>
              {/* <img src={product.image} alt=""></img> */}
            </div>
          ) : (
            <div className='flex flex-col gap-4 w-full'>
              <h3 className='text-xl font-medium mb-4 flex justify-center w-full'>DID YOU KNOW?</h3>
              <div className=' pl-6 flex flex-col gap-8'>
                {product.ingredient ? (
                  product.ingredient.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <img src={item.image} alt={item.text} className="w-24 h-24 bg-cover" />
                        <div className='flex flex-col gap-2'>
                            <p className="font-semibold text-xl">{item.text}</p>
                            <p>{item.description}</p>
                            <button className="text-white bg-black hover:bg-opacity-30 py-2 px-4 rounded-full w-fit">Read More</button>
                            <hr />
                        </div>
                    </div>
                  ))
                ) : (
                  <>
                    <p>No Ingredient</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 mb-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-10 w-4 rounded-md bg-black"></div>
            <h2 className="text-2xl font-semibold">Related Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;