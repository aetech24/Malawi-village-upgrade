import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci
          perferendis odit expedita nulla corrupti, excepturi quisquam id ratione.
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Have some question for us</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-700">Phone Number</h4>
                  <p className="text-gray-600">+233 248 9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <p>
                    <a href="mailto:malawivillage@gmail.com" className="text-blue-500 hover:underline">
                      malawivillage@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaClock className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-700">Working Hours</h4>
                  <p className="text-gray-600">Monday - Thursday</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;