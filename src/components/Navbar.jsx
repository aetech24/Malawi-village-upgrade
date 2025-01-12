import React, { useState, useEffect, useContext } from "react";
import { CgMenu } from "react-icons/cg";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state for the menu
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const location = useLocation();

  const totalCartItems =
    cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  const totalWishlistItems = wishlist.length;

  // Track scroll progress only on the homepage
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const progress = Math.min(scrollY / 200, 1); // Cap progress at 1
        setScrollProgress(progress);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrollProgress(1); // Default to fully scrolled for non-homepages
    }
  }, [location.pathname]);

  const isHomepage = location.pathname === "/";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isHomepage
            ? scrollProgress > 0.1
              ? "bg-yellow text-black shadow-md"
              : "bg-transparent text-white"
            : "bg-yellow text-black shadow-md"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-2">
          {/* Left Section */}
          <div>
            {isHomepage && scrollProgress > 0.1 && (
              <Link
                to="/contact"
                className="hover:text-white transition duration-200"
              >
                + Contact Us
              </Link>
            )}
          </div>

          {/* Center Section */}
          {scrollProgress > 0 && (
            <div
              className={`absolute transition-all duration-300 ${
                isHomepage
                  ? "left-1/2 transform -translate-x-1/2"
                  : "left-1/2 transform -translate-x-1/2"
              }`}
              style={{
                transform: `translateX(-50%) scale(${1 - scrollProgress * 0.5})`,
                color: scrollProgress > 0.1 || !isHomepage ? "black" : "white",
              }}
            >
              <Link
                to="/"
                className="font-serif tracking-wide transition-all duration-300"
                style={{
                  whiteSpace: "nowrap",
                  fontSize: isHomepage && scrollProgress > 0.1 ? "24px" : "50px",
                }}
              >
                M A L A W I
              </Link>
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition duration-200"
              >
                <CgMenu />
              </button>
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg w-48">
                  <ul className="text-black">
                    <li>
                      <Link
                        to="products"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        All Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="products"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Refreshment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="products"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Detox & Immune Booster
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="products"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sweet & Unsweet
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Search */}
            {isSearchVisible ? (
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="border px-4 py-2 rounded-full focus:outline-none text-black"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchVisible(false)}
                  className="absolute right-2 top-2 text-gray-500 hover:text-black"
                >
                  ✖
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchVisible(true)}
                className="transition duration-200"
              >
                <AiOutlineSearch />
              </button>
            )}

            {/* Wishlist */}
            <button
              onClick={() => navigate("/wishlist")}
              className="relative transition duration-200"
            >
              <AiOutlineHeart />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="relative transition duration-200"
            >
              <AiOutlineShoppingCart />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* User */}
            {isAuthenticated ? (
              <button onClick={logout} className="transition duration-200">
                <AiOutlineUser />
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="transition duration-200"
              >
                <AiOutlineUser />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {isHomepage && scrollProgress === 0 && (
        <div className="absolute top-1/3 w-full text-center z-40">
          <h1 className="text-white text-6xl font-serif tracking-[0.5em]">
            M A L A W I
          </h1>
        </div>
      )}
    </>
  );
};

export default Navbar;