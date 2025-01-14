import React, { useState, useEffect, useRef } from 'react';
import Hero from '../assets/Zobo-hero-img.jpg';
// import Banner from '../components/Banner';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { FaSearch } from "react-icons/fa";
import { products } from '../constants/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

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
        <div className='absolute inset-0 bg-black bg-opacity-20'></div>
        <div className='absolute max-md:mt-10 w-full flex flex-col gap-6 justify-center items-center'>
          {/* <div className="relative group sm:block w-[60%] ">
            <input
              type="text"
              className="w-full p-3 bg-opacity-60 rounded-full bg-white placeholder:text-gray-800 px-6"
              placeholder="Search your favorite juice"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="">
              <FaSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray group-hover:text-yellow"
               />
            </button>
            {searchTerm && (
              <div className="absolute bg-white w-full mt-2 rounded-lg shadow-lg z-10">
                {filteredProducts.map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="block p-2 hover:bg-gray-200">
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div> */}
          <h1 className='text-[10px] gap-0 md:text-[80px] text-white text-center w-[35%] tracking-0 '></h1>
          <div className='flex flex-col gap-0 items-center justify-center mt-20'>
            <p className='text-yellow text-2xl'>Fresh Daily Juice</p>
            <div className='mt-10'>
            <Link to='/products'>
              <button className='bg-yellow text-black hover:bg-opacity-40 px-1 mb-[-500px] py-3 flex justify-center text-xl font-medium items-center w-[250px] rounded-[5px]'>
                Pressed juices
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 flex flex-col gap-6'>
        {/* <div className='flex items-center gap-2 px-4 md:px-10'>
          <div className='h-10 w-4 rounded-md bg-black'></div>
          <p className='text-xl font-semibold'>Today&apos;s</p>
        </div> */}
        <div className='flex flex-col gap-5 px-4 md:px-10'>
          <div className='flex items-center justify-between text-center'>
            <h1 className='text-3xl font-medium mb-4 '>Categories</h1>
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
            ref={scrollContainerRef}
            className='flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide'
          >
            {products.map((item, id) => (
              <ProductCard
                key={id}
                product={item}
                className='min-w-[300px] max-w-[300px] flex-shrink-0'
              />
            ))}
          </div>

          <div className='w-full flex justify-center mx-auto'>
            <Link to='/products'>
              <button className='bg-black text-white hover:bg-opacity-40 px-16 py-3 flex justify-center items-center w-fit'>
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Banner /> */}
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
