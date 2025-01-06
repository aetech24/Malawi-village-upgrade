import React from "react";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const About = () => {
  return (
    <>
    <main className="bg-white-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to Malawi Village! We are committed to making a positive
            impact in our community by providing access to high-quality products
            and supporting local initiatives. Whether it's through our local
            market presence or community-driven projects, we aim to inspire and
            uplift.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to bridge the gap between sustainability and
            innovation. Join us in creating a better future—one step at a time.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center hover:scale-105 transform transition-all">
          <img
            src="./src/assets/tes-img1.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg max-h-80 max-w-lg"
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


    </>
    
  );
 
};


export default About;