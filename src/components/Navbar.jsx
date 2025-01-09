import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineClose, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useAuth } from '../components/AuthContext';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/'); // Redirect after logout
  };

  return (
    <nav className="bg-yellow py-2 fixed top-0 z-50 w-full">
      <div className="md:mx-10 mx-5 relative flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-16 h-16" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-lg font-medium">
          <Link to="/" className="text-black hover:text-white transition duration-200">
            Home
          </Link>
          <Link to="/products" className="text-black hover:text-white transition duration-200">
            Shop
          </Link>
          <Link to="/about" className="text-black hover:text-white transition duration-200">
            About Us
          </Link>
          <Link to="/contact" className="text-black hover:text-white transition duration-200">
            Contact Us
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={() => navigate('/wishlist')} className="hover:text-white transition duration-200">
            <AiOutlineHeart />
          </button>
          <button onClick={() => navigate('/cart')} className="hover:text-white transition duration-200">
            <AiOutlineShoppingCart />
          </button>
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-white transition duration-200"
              >
                <AiOutlineUser />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-blue-50 transition duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className=" bg-black text-white py-1 px-4 rounded-md hover:bg-black transition duration-200">
                Login
              </Link>
              <Link to="/register" className=" bg-black text-white py-1 px-4 rounded-md hover:bg-black transition duration-200">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-black">
            {mobileDrawerOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <CgMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed left-0 top-0 z-40 w-3/4 h-full bg-yellow p-12 flex flex-col items-center gap-4">
          <Link to="/" className="text-xl font-semibold" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/products" className="text-xl font-semibold" onClick={toggleNavbar}>
            Shop
          </Link>
          <Link to="/about" className="text-xl font-semibold" onClick={toggleNavbar}>
            About Us
          </Link>
          <Link to="/contact" className="text-xl font-semibold" onClick={toggleNavbar}>
            Contact Us
          </Link>
          <hr className="w-full border-t-2 border-black my-4" />
          {isAuthenticated ? (
            <button
              onClick={() => {
                handleLogout();
                toggleNavbar();
              }}
              className="bg-black text-white py-2 px-4 rounded-md"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-black text-white py-2 px-4 rounded-md"
                onClick={toggleNavbar}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-black text-white py-2 px-4 rounded-md"
                onClick={toggleNavbar}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
