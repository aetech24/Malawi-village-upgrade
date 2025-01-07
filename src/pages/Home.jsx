import React from 'react'
import Hero from '../assets/home-hero.png'
import {HomeProducts} from '../constants/index'
import Banner from '../components/Banner';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { products } from '../constants/products';

const Home = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 300; // Adjust scroll distance as needed
        }
    };

  return (
    <div>
        <div className="lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex items-center justify-center w-full">
            <img src={Hero} className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className="absolute max-md:mt-10 w-full flex flex-col gap-6 justify-center items-center">
                <div className='w-full px-4 md:px-52'>
                    <input type="text" className='w-full p-3 bg-opacity-60 rounded-full bg-white placeholder:text-gray-800 px-6' placeholder='Search your favorite juice'/>
                </div>
                <div className='flex flex-col gap-0 items-center justify-center'>
                    <h1 className='text-6xl md:text-[80px] text-white text-center'>Malawi Village</h1>
                    <p className='text-yellow text-2xl'>Every Sip Feels Like Spring</p>
                </div>
            </div>
        </div>
        <div className='py-12 flex flex-col gap-6'>
            <div className='flex items-center gap-2 px-4 md:px-10'>
                <div className='h-10 w-4 rounded-md bg-black'></div>
                <p className='text-xl font-semibold'>Today</p>
            </div>
            <div className='flex flex-col gap-5 px-4 md:px-10'>
                <div className='flex items-center justify-between'>
                    <h1 className="text-3xl font-medium mb-4">Flash Sales</h1>
                    <div className="relative">
                        {/* Scroll buttons */}
                        
                        <button
                            className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full z-10"
                            onClick={scrollRight}
                        >
                            <FaArrowRight />
                        </button>
                        <button
                            className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full z-10"
                            onClick={scrollLeft}
                        >
                            <FaArrowLeft />
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide"
                >
                    {products.map((item, id) => (
                        <div
                            key={id}
                            className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-md"
                        >
                            <img src={item.image} alt="" className="w-full h-[200px]" />
                            <div className="w-full cursor-pointer bg-black text-white p-2 text-center">
                                Add to cart
                            </div>
                            <div className="py-4">
                                <p>{item.name}</p>
                                <p>GH¢ 120</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* </div> */}

                <div className='w-full flex justify-center mx-auto'>
                    <button className='bg-black text-white px-16 py-3 flex justify-center items-center w-fit'>View All Products</button>
                </div>
            </div>
        </div>
        <Banner />
        <hr className='mx-10'/>
        <div className='flex flex-col gap-6 px-4 md:px-10 py-12'>
            <div className='flex items-center justify-between'>
                <h1 className='md:text-3xl text-2xl font-medium'>Explore Our Products</h1>
                <p className=''>See All</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
                {
                    products.map((item, id) => (
                        <div
                            key={id}
                            className="lg:min-w-[300px] lg:max-w-[300px] flex-shrink-0 rounded-md"
                        >
                            <img src={item.image} alt="" className="w-full h-[200px]" />   
                            <div className="w-full bg-black text-white p-2 text-center">
                                Add to cart
                            </div>
                            <div className="py-4">
                                <p>{item.name}</p>
                                <p>GH¢ 120</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default Home