import React, { useState, useEffect, useContext } from 'react';
import { CgMenu } from 'react-icons/cg';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { products } from '../constants/products';
import Logo from '../assets/logo.png';
import LogoWhite from '../assets/MalawiWhite.png';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for main menu
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for user profile dropdown
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const location = useLocation();

  const totalCartItems =
    cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  const totalWishlistItems = wishlist.length;
  const isMobile = window.innerWidth <= 768;
  // scroll effect

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const progress = Math.min(scrollY / 200, 1); // Cap progress at 1
        setScrollProgress(progress);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrollProgress(1); // Default to fully scrolled for non-homepages
    }
  }, [location.pathname]);

  useEffect(() => {
    const results = products.filter((product) => {
      return (
        (product.name &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.description &&
          product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredProducts(results);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductSelect = (productId) => {
    navigate(`/product/${productId}`);
    setIsSearchVisible(false); // close search dropdown when a product is selected
  };

  const handleSignUp = (userDetails) => {
    // Simulate user sign-up logic
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/login'); // Redirect to login after sign-up
  };

  const handleLogin = (loginDetails) => {
    const storedUser = JSON.parse(localStorage.getItem('userDetails'));

    if (
      storedUser &&
      storedUser.email === loginDetails.email &&
      storedUser.password === loginDetails.password
    ) {
      alert('Login successful!');
      navigate('/'); // Redirect to homepage or dashboard
    } else {
      alert('Invalid login details. Please try again.');
    }
  };

  const isHomepage = location.pathname === '/';

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-[100%] transition-all duration-300 ${
          isHomepage
            ? scrollProgress > 0.1
              ? 'bg-yellow text-black shadow-md'
              : 'bg-transparent text-white'
            : 'bg-yellow text-black shadow-md'
        }`}
      >
        <div className='flex justify-between items-center px-4 py-2'>
          {/* Left Section */}
          <div>
            <Link
              to='/contact'
              className='hover:text-white transition duration-200 text-[12px]'
            >
              + Contact Us
            </Link>
          </div>

          {/* Center Section */}
          <>
            {scrollProgress > 0 && (
              <div
                className={`absolute ${
                  isMobile ? 'text-[10px]' : 'text-[20px]'
                } ${
                  isHomepage
                    ? 'left-1/2 transform -translate-x-1/2'
                    : 'left-1/2 transform -translate-x-1/2 w-full flex justify-center tracking-normal'
                }`}
                style={{
                  transform: `translateX(-50%) translateY(${
                    scrollProgress * 1
                  }px) scale(${1 - scrollProgress * 0.25})`,
                  color:
                    scrollProgress > 0.1 || !isHomepage ? 'black' : 'white',
                }}
              >
                <Link
                  to='/'
                  className='font-serif tracking-0 align-center tracking-normal'
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize:
                      isHomepage && scrollProgress > 0.8 ? '18px' : '20px',
                    transitionTimingFunction: 'cubic-bezier(0.2, 0, 0.1, 0)',
                  }}
                >
                  <div className='flex item-center space-x-0.5'>
                    <h4 className='sm:text-[11px] text-[13.5px]'>MALAWI VILLAGE</h4>
                    <img src={Logo} alt='logo' className='size-2.5 w-6 h-6'></img>
                  </div>
                </Link>
              </div>
            )}
          </>
          {/* Right Section */}
          <div className='flex items-center gap-2'>
            {/* Main Menu */}
            <div className={`relative ${isMobile ? 'text-sm' : 'text-lg'}`}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='transition duration-200'
              >
                <CgMenu />
              </button>
              {isMenuOpen && (
                <div className='absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg w-48'>
                  <ul className='text-black'>
                    <li>
                      <Link
                        to='products'
                        className='block px-4 py-2 hover:bg-gray-200 ml-100'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        All Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='products'
                        className='block px-4 py-2 hover:bg-gray-200'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Refreshment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='products'
                        className='block px-4 py-2 hover:bg-gray-200'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Detox & Immune Booster
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='products'
                        className='block px-4 py-2 hover:bg-gray-200'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sweet & Unsweet
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/*Search */}
            {isSearchVisible ? (
              <div className={`relative ${isMobile ? 'text-sm' : 'text-lg'}`}>
                <input
                  type='text'
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder='Search products...'
                  className='border px-4 py-2 rounded-full focus:outline-none text-black w-[100px] md:w-[200px] lg:w-[300px] h-auto transition-all duration-300'
                  autoFocus
                />
                <button
                  type='button'
                  onClick={() => setIsSearchVisible(false)}
                  className='absolute right-2 top-2 text-gray-500 hover:text-black'
                >
                  ✖
                </button>

                {searchTerm && filteredProducts.length > 0 && (
                  <ul className='absolute z-10 w-full bg-yellow-500 shadow-lg mt-1 rounded-lg max-h-60 overflow-y-auto'>
                    {filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className='px-4 py-2 bg-white hover:bg-gray-200 cursor-pointer transition-all duration-200'
                        onClick={() => handleProductSelect(product.id)}
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                )}

                {searchTerm && filteredProducts.length === 0 && (
                  <div className='absolute z-10 w-full bg-white shadow-lg mt-1 rounded-lg'>
                    <p className='px-4 py-2 text-gray-500'>No products found</p>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsSearchVisible(true)}
                className='transition duration-200'
              >
                <AiOutlineSearch />
              </button>
            )}

            {/* Wishlist */}
            <button
              onClick={() => navigate('/wishlist')}
              className={`relative transition duration-200 ${
                isMobile ? 'text-sm' : 'text-lg'
              }`}
            >
              <AiOutlineHeart />
              {totalWishlistItems > 0 && (
                <span className='absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                  {totalWishlistItems}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate('/cart')}
              className={`relative transition duration-200 ${
                isMobile ? 'text-sm' : 'text-lg'
              }`}
            >
              <AiOutlineShoppingCart />
              {totalCartItems > 0 && (
                <span className='absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* User Profile */}
            <div
              className={`relative transition duration-200 ${
                isMobile ? 'text-sm' : 'text-lg'
              }`}
            >
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className='relative '
              >
                <AiOutlineUser />
              </button>
              {isProfileMenuOpen && (
                <div className='absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg w-48 z-50'>
                  <ul className='text-black'>
                    {isAuthenticated ? (
                      <li>
                        <button
                          onClick={() => {
                            logout();
                            alert("You've been logged out");
                            navigate('/');
                            setIsProfileMenuOpen(false);
                          }}
                          className='block px-4 py-2 hover:bg-gray-200 w-full text-left'
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to='/login'
                            className='block px-4 py-2 hover:bg-gray-200'
                            onClick={() => setIsProfileMenuOpen(false)}
                          >
                            Log In
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/register'
                            className='block px-4 py-2 hover:bg-gray-200'
                            onClick={() => setIsProfileMenuOpen(false)}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {isHomepage && scrollProgress === 0 && (
        <div
          className={`absolute bottom-2/3 left-1/2 transform -translate-x-1/2 z-40 flex justify-center items-center flex-wrap ${
            isMobile ? 'text-sm' : 'text-lg'
          }`}
        >
          {' '}
          <h2 className='text-white text-4xl font-serif tracking-[0.5em] mb-10 text-center flex items-center'>
            <span className='whitespace-normal'>MALAWI VILLAGE</span>
            {/* <img src={LogoWhite} alt='logo-white' className='ml-2 w-10 h-10 p-1'/> */}
          </h2>
        </div>
      )}
    </>
  );
};

export default Navbar;
<div className='flex item-center space-x-1'>
  <h4 className='text-[11px]'>MALAWI VILLAGE</h4>
</div>;
