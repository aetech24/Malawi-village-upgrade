import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
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
    <main className="md:p-8 max-md:mt-16 min-h-screen">
      <div className="max-w-6xl mx-auto rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-8">
          If you have any questions or need further information, please feel free to get in touch with us. We are here to help!
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div>
            <form action="" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name*"
                  required
                  className="w-full p-3 border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number*"
                  required
                  className="w-full p-3 border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address*"
                  required
                  className="w-full p-3 border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message*"
                  required
                  className="w-full p-3 border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">For further inquiries</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-black text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-700">Phone Number</h4>
                  <p className="text-gray-600">+233 248 9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-black text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <p>
                    <a href="mailto:malawivillage@gmail.com" className="text-black hover:underline">
                      malawivillage@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaClock className="text-black text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-700">Working Hours</h4>
                  <p className="text-gray-600">Monday - Thursday</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow text-black p-2 rounded-full"
        >
          ↑
        </button>
      )}
    </main>
  );
};

export default Contact;
