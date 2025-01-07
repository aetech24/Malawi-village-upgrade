import React, { useState } from 'react'
import Image from "../assets/juice1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SingleProduct = () => {
  const [activeTab, setActiveTab] = useState('description');

  const images = [
    "/src/assets/image-1.jpg",
    "/src/assets/image-2.jpg",
    "/src/assets/image-3.jpg",
    "/src/assets/image-4.jpg",
  ];

  // Sample related products data
  const relatedProducts = [
    {
      id: 1,
      name: "Mango Juice",
      price: "120",
      image: "/src/assets/image-5.jpg"
    },
    {
      id: 2,
      name: "Orange Juice",
      price: "150",
      image: "/src/assets/image-6.jpg"
    },
    {
      id: 3,
      name: "Apple Juice",
      price: "130",
      image: "/src/assets/image-7.jpg"
    },
    {
      id: 4,
      name: "Mixed Fruit Juice",
      price: "180",
      image: "/src/assets/image-8.jpg"
    }
  ];

  return (
    <div className='px-4 md:px-10 py-5 max-md:mt-16'>
        <h1 className='text-4xl py-5'>Single Product</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between md:gap-16 gap-6 py-6'>
            <img src={Image} alt="" className="" />
            <div className='flex flex-col gap-6'>
                <p>Product Name: </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sed placeat recusandae suscipit cupiditate ratione alias laboriosam. Earum, natus ab.</p>
                <p className='font-semibold text-2xl'>$ 300</p>
                <select name="" id="" className='border px-4 py-3 border-black outline-none'>
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                    <option value="">Extra Large</option>
                </select>
                <div className='flex flex-col gap-3'>
                    <button className='bg-yellow px-6 py-2 text-center'>Add to cart</button>
                    <button className='bg-black text-white px-6 py-2 text-center'>Add to wishlist</button>
                </div>
            </div>
        </div>

        {/* Swiper Section */}
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum optio quibusdam facilis corporis dolor amet sequi obcaecati tempore dolorum. Laboriosam, repellat corporis voluptatibus nemo iste maiores quae necessitatibus temporibus.
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, distinctio optio, ut quis obcaecati quasi in dolor sed nobis repellendus exercitationem, excepturi velit consequatur dolores magnam itaque adipisci deserunt officia.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, distinctio optio, ut quis obcaecati quasi in dolor sed nobis repellendus exercitationem, excepturi velit consequatur dolores magnam itaque adipisci deserunt officia.</p>
              </div>
            ) : (
              <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-semibold mb-4'>Ingredients</h3>
                <ul className='list-disc pl-6'>
                  <li>Natural fruit extract</li>
                  <li>Purified water</li>
                  <li>Natural sweeteners</li>
                  <li>Vitamin C</li>
                  <li>Natural preservatives</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className='mt-16 mb-10'>
          <div className='flex items-center gap-2 mb-8'>
            <div className='h-10 w-4 rounded-md bg-black'></div>
            <h2 className='text-2xl font-semibold'>Related Products</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {relatedProducts.map((product) => (
              <div key={product.id} className="rounded-md">
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
                  <p>GH¢ {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default SingleProduct