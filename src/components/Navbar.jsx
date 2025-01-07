import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="bg-yellow py-2 fixed lg:sticky top-0 z-50 w-full">
      <div className="md:mx-10 mx-5 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 gap-2">
            <div>
              <img src={Logo} alt="" className="w-16 h-16"/>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-lg font-medium">
            <Link to="/" className="text-black hover:text-white transition">Home</Link>
            <Link to="/products" className="text-black hover:text-white transition">Menu</Link>
            <Link to="/about" className="text-black hover:text-white transition">About Us</Link>
            <Link to="/contact" className="text-black hover:text-white transition">Contact Us</Link>
          </div>
          <ul className="flex items-center gap-2 lg:gap-4">
            <Link to="/login"
                className="bg-white hidden lg:block text-black py-1 px-2 md:px-4 md:py-2 rounded-md font-medium hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white hidden lg:block text-black py-1 px-2 md:px-4 md:py-2 rounded-md font-medium hover:bg-blue-50 transition"
              >
                Sign Up
              </Link>
          </ul>
          <div className="lg:hidden md:flex justify-end">
            <button onClick={toggleNavbar} className="text-black">
              {mobileDrawerOpen ? (
                <AiOutlineClose className="text-3xl font-bold" />
              ) : (
                <CgMenu className="text-3xl font-bold" />
              )}
            </button>
          </div>
          {/* {isAuthenticated && (
            <div className="user_profile hidden lg:flex flex-col items-end ml-4">
              <h3 className="text-black font-medium">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          )} */}
        </div>

        {mobileDrawerOpen && (
          <div className="fixed left-0 z-20 w-3/4 h-[95vh] p-12 flex flex-col items-center bg-yellow transition-all duration-300 ease-linear lg:hidden text-black gap-4 text-semibold">
            <Link to="/" className="text-black hover:text-white transition" onClick={toggleNavbar}><p className="text-xl font-semibold cursor-pointer">Home</p></Link>
            <Link to="/products" className="text-black hover:text-white transition" onClick={toggleNavbar}><p className="text-xl font-semibold cursor-pointer">Menu</p></Link>
            <Link to="/about" className="text-black hover:text-white transition" onClick={toggleNavbar}><p className="text-xl font-semibold cursor-pointer">About Us</p></Link>
            <Link to="/contact" className="text-black hover:text-white transition" onClick={toggleNavbar}><p className="text-xl font-semibold cursor-pointer">Contact Us</p></Link>
            <hr className="text-black"/>
            <div className="flex flex-col gap-2">
              <Link to="/login" className="text-black hover:text-white transition" onClick={toggleNavbar}><p className="text-white bg-black py-2 rounded-md px-4 text-center">Log In</p></Link>
              <Link to="/register" className="text-black hover:text-white transition" onClick={toggleNavbar}><p className="text-white bg-black py-2 rounded-md px-4 text-center">Sign Up</p></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
