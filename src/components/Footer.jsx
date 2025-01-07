import React from "react";
import {Link} from 'react-router-dom'
import Download from '../assets/download.png'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white pt-10 md:pt-20 px-4 md:px-20">
      <div className="gap-4 md:flex md:gap-16 pb-16 md:pb-16 flex-wrap">
        <div className="flex flex-col gap-6">
            <h1 className="md:text-xl font-semibold">Exclusive</h1>
            <div className="flex flex-col gap-2">
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div>
                    <input type="text" placeholder="Enter your email" className="bg-transparent border border-white py-2 px-4 rounded-md"/>
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
            <ul className="max-sm:text-sm flex flex-col gap-2">
              <li>My Account</li>
              <li>Login / Sign Up</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Quick Links</h1>
            <ul className="max-sm:text-sm flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Follow Us On</h1>
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
