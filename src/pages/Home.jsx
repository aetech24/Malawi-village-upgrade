import React, { useState, useEffect, useRef } from 'react';
import Hero from '../assets/Zobo-hero-img.jpg';
// import Banner from '../components/Banner';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { FaSearch } from "react-icons/fa";
import { products } from '../constants/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import RefreshingJuice from '../assets/Zobo.jpg';
import DetoxAndImmuneBooster from '../assets/Vitamin_C.jpg';
import SweetAndUnsweetTea from '../assets/RaspberryStrawberryPomegranateTea.jpg';

const Home = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedCategory] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const scrollContainerRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const results = products.filter(product => {
  //     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                          product.description?.toLowerCase().includes(searchTerm.toLowerCase());
  //     const matchesCategory = selectedCategory === '' || selectedCategory === 'All Categories' ||
  //                            product.category === selectedCategory;
  //     return matchesSearch && matchesCategory;
  //   });
  //   setFilteredProducts(results);
  // }, [searchTerm, selectedCategory]);

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className='lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex items-center justify-center w-full relative'>
        <div
          className='absolute inset-0 w-full h-full'
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
          {/* Overlay for dimming */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='absolute inset-0 bg-black bg-opacity-20'></div>
        <div className='absolute max-md:mt-10 w-full flex flex-col gap-6 justify-center items-center'>
          <h1 className='text-[10px] gap-0 md:text-[80px] text-white text-center w-[35%] tracking-0 '></h1>
          <div className='flex flex-col gap-0 items-center justify-center mt-20'>
            <p className='text-yellow text-2xl'>Fresh Daily Juice</p>
            <div className='mt-10'>
              <Link to='/products'>
                <button className='bg-yellow text-black hover:bg-opacity-40 px-1  py-3 flex justify-center items-center w-[250px] rounded-[5px]'>
                  Explore Our Juices
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 flex flex-col gap-6'>
        <div className='flex flex-col gap-5 px-4 md:px-10'>
          <h1 className='text-3xl font-medium mb-4 text-center'>Categories</h1>
          <div className='flex items-center justify-between'>
            <div className='relative'>
              <button
                className='absolute -left-10 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full z-10'
                onClick={scrollRight}
              >
                <FaArrowRight />
              </button>
              <button
                className='absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full z-10'
                onClick={scrollLeft}
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>
          <div
            // ref={scrollContainerRef}
            className='flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide justify-center '
          >
            <div className='flex gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8'>
              <Link to='../products?category=Refreshments'>
                <div className='rounded-md cursor-pointer relative'>
                  <div className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <img src={RefreshingJuice} alt='Refreshments' className="w-full h-[200px] object-cover" />
                  <div className="w-full cursor-pointer bg-white hover:bg-opacity-30 duration-200 text-[#232323] p-2 text-center">
                    Refreshments
                  </div>
                </div>
              </Link>
              <Link to='/products?category=Detox and Immune Booster'>
                <div className='rounded-md cursor-pointer relative'>
                  <div className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <img src={DetoxAndImmuneBooster} alt='DetoxAndImmuneBoosters' className="w-full h-[200px] object-cover" />
                  <div className="w-full cursor-pointer bg-white hover:bg-opacity-30 duration-200 text-[#232323] p-2 text-center">
                    Detox and Immune Booster
                  </div>
                </div>
              </Link>
              <Link to='/products?category=Sweet and Unsweet Tea'>
                <div className='rounded-md cursor-pointer relative'>
                  <div className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <img src={SweetAndUnsweetTea} alt='SweetAndUnsweetTea' className="w-full h-[200px] object-cover" />
                  <div className="w-full cursor-pointer bg-white hover:bg-opacity-30 duration-200 text-[#232323] p-2 text-center">
                    Sweet and Unsweet Tea
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className='w-full flex justify-center mx-auto'>
            <Link to='/products'>
              <button className='bg-black text-white hover:bg-opacity-40 px-16 py-3 flex justify-center items-center w-fit'>
                Explore All Categories
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className='mx-10' />
      <div className='flex flex-col gap-6 px-4 md:px-10 py-12'>
        <div className='flex items-center justify-between'>
          <h1 className='md:text-3xl text-2xl font-medium'>
            Explore Our Products
          </h1>
          <Link to='/menu' className='hover:underline'>
            See All
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
          {products.slice(0, 8).map((item, id) => (
            <ProductCard
              key={id}
              product={item}
              className='lg:min-w-[300px] lg:max-w-[300px] flex-shrink-0'
            />
          ))}
        </div>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 bg-yellow text-black p-2 rounded-full'
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
