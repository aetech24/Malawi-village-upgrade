import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Download from '../assets/download.png';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Add your email sending logic here
    console.log("Email sent:", email);
    setEmail("");
  };

  return (
    <div className="bg-black w-full text-white pt-10 md:pt-20 px-4 md:px-20">
      <div className="gap-4 md:flex md:gap-16 pb-16 md:pb-16 flex-wrap">
        <div className="flex flex-col gap-6">
          <h1 className="md:text-xl font-semibold">Exclusive</h1>
          <div className="flex flex-col gap-2">
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="flex flex-col max-[329.8px]:flex-col">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border border-white py-2 px-4 rounded-md"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                onClick={handleSubscribe}
                className="bg-yellow text-black py-2 px-4 rounded-md ml-2 max-[329.8px]:ml-0 max-[329.8px]:mt-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10 md:gap-20 max-sm:flex-wrap max-sm:pt-8">
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Support</h1>
            <ul className="max-sm:text-sm flex flex-col gap-2">
              <li>111 Accra DH 1515, Ghana</li>
              <li>exclusive@gmail.com</li>
              <li>+233 123 456 789</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Account</h1>
            <ul className="max-sm:text-sm flex flex-col gap-2 cursor-pointer">
             <Link><li className="hover:text-yellow transition-colors" >My Account</li></Link>
             <Link to='/login'><li className="hover:text-yellow transition-colors" >Login / Sign Up</li></Link>
              <li className="hover:text-yellow transition-colors" >Cart</li>
              <li className="hover:text-yellow transition-colors" >Wishlist</li>
              <Link to='/shop'><li className="hover:text-yellow transition-colors" >Shop</li></Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Quick Links</h1>
            <ul className="max-sm:text-sm flex flex-col gap-2 cursor-pointer">
              <li className="hover:text-yellow transition-colors">Privacy Policy</li>
              <li className="hover:text-yellow transition-colors">Terms of Use</li>
              <li className="hover:text-yellow transition-colors">FAQ</li>
              <Link to='/contact'><li className="hover:text-yellow transition-colors" >Contact</li></Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold cursor-pointer">Follow Us On</h1>
            {/* icons */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/malawifreshdrinks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow transition-colors"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
              <a 
                href="https://www.instagram.com/malawi_village?igsh=YzljYTk1ODg3Zg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a 
                href="https://www.tiktok.com/@malawi_village?_t=ZT-8srz3UMpCFK&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow transition-colors"
              >
                <FaTiktok className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-2 max-sm:text-sm max-sm:flex-col items-center justify-center text-gray-400">
        <p>&copy; 2025 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
