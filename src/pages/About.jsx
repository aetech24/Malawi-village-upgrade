import React, { useState, useEffect } from "react";
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Test from '../assets/tes-img1.jpg';

const About = () => {
  const [showScroll, setShowScroll] = useState(false);

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
    <>
      <main className="bg-white-100 px-4 max-md:mt-16 py-8 md:py-12 md:px-10">
        <div className="flex flex-col md:px-16 md:flex-row justify-between items-center gap-8 md:gap-28">
          {/* Text Section */}
          <div className="text-center md:text-left md:w-[70%]">
            <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to Malawi Village! We are committed to making a positive
              impact in our community by providing access to high-quality products
              and supporting local initiatives. Whether it's through our local
              market presence or community-driven projects, we aim to inspire and
              uplift.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to bridge the gap between sustainability and
              innovation. Join us in creating a better future—one step at a time.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center hover:scale-105 transform transition-all duration-500 ease-in-out">
            <img
              src={Test} // updated image path
              alt="About Us"
              className="rounded-lg shadow-lg w-[600px] h-[500px]"
            />
          </div>
        </div>
      </main>
      <div>
        <Testimonials />
      </div>
      <div>
        <Gallery />
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow text-black p-2 rounded-full"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default About;