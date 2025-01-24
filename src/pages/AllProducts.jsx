import React, { useEffect, useContext, useState } from 'react';
import { products } from '../constants/products';
import ProductCard from '../components/ProductCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const productsPerPage = 12;
  const { addToCart, addToWishlist } = useContext(CartContext);

  // Get unique categories from products
  const categories = ['All Categories', ...new Set(products.map(product => product.category))];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All Categories' || 
                           product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Generate page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='px-4 md:px-10 py-8 max-lg:mt-16 w-full lg:mt-20'>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 w-full'>
        <div className='flex items-center gap-2 md:w-1/4'>
          <div className='h-10 w-4 rounded-md bg-black'></div>
          <p className='text-2xl font-semibold'>Shop All</p>
        </div>
        <div className='flex flex-col md:flex-row md:items-center gap-4 w-full md:w-3/4 md:justify-end'>
          <select 
            value={selectedCategory}
            onChange={handleCategoryChange}
            className='bg-gray-100 p-3 rounded-full w-full md:w-[250px] outline-none cursor-pointer text-sm'
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className='w-full md:w-[350px]'>
            <input 
              type="search" 
              placeholder='Browse your favorite juice...' 
              className='bg-gray-100 p-3 rounded-full w-full outline-none text-sm'
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 min-h-[600px]'>
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="lg:min-w-[300px] lg:max-w-[300px] flex-shrink-0"
              onAddToCart={() => addToCart(product)}
              onAddToWishlist={() => addToWishlist(product)}
            />
          ))
        ) : (
          <div className='col-span-full flex justify-center items-center text-xl text-gray-500'>
            No products found matching your criteria
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className='flex justify-center items-center gap-2 my-8'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            <FaArrowLeft size={16} />
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-8 h-8 rounded-full ${
                currentPage === number
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      )}

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow text-black p-2 rounded-full"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default AllProducts;