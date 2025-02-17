import { useState } from "react";
import { Link } from "react-router-dom";
// import Download from '../assets/download.png';
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
      <div className="gap-4 md:flex md:gap-16 pb-16 md:pb-16 flex-wrap  justify-center items-center">
        <div className="flex flex-col gap-6">
          <h1 className="md:text-xl font-semibold">Exclusive</h1>
          <div className="flex flex-col gap-2">
            <p className="mb-2">Get 10% off your first order</p>
            <div className="flex flex-col max-[329.8px]:flex-col">
              <input
                formAction="info@malawivillage.com"
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border border-white py-2 px-4 rounded-md"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                onClick={handleSubscribe}
                className="bg-yellow text-black hover:bg-white duration-200 py-2 px-4 rounded-md mb-2 ml-0 float-right mt-2 max-[720px]:ml-0 max-[720px]:mt-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10 md:gap-20 max-sm:flex-wrap max-sm:pt-8">
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Company</h1>
            <ul className="max-sm:text-sm flex flex-col gap-2">
              <Link to="/">
                <li className="hover:text-yellow duration-200 transition-colors">
                  Home
                </li>
              </Link>
              <Link to="/shop">
                <li className="hover:text-yellow duration-200 transition-colors">
                  Shop
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-yellow duration-200 transition-colors">
                  Contact
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:text-yellow duration-200 transition-colors">
                  About Us
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Help</h1>
            <ul className="max-sm:text-sm flex flex-col gap-2 cursor-pointer">
              <li className="hover:text-yellow duration-200 transition-colors">
                Privacy & Policy
              </li>
              <li className="hover:text-yellow duration-200 transition-colors">
                Terms & Conditions
              </li>
              <li className="hover:text-yellow duration-200 transition-colors">
                FAQ
              </li>
              <Link to="/tracking">
                <li className="hover:text-yellow duration-200 transition-colors">
                  Order Tracking
                </li>
              </Link>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold">Products</h1>
            <ul className="max-sm:text-sm flex flex-col gap-2 cursor-pointer">
             <Link><li className="hover:text-yellow duration-200 transition-colors" >Refreshment</li></Link>
             <Link to='/login'><li className="hover:text-yellow duration-200 transition-colors" >Detox & Immune Boosters</li></Link>
              <li className="hover:text-yellow duration-200 transition-colors" >Sweet & Unsweetened</li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="md:text-xl font-semibold cursor-pointer">
              Follow Us On
            </h1>
            {/* icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com/malawifreshdrinks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow duration-200 transition-colors"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/malawi_village?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow duration-200 transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@malawi_village?_t=ZT-8srz3UMpCFK&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow duration-200 transition-colors"
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
