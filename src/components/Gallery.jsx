import React from "react";
import Gallery2 from "../assets/tes-img2.jpg";
import Gallery3 from "../assets/tes-img3.jpg";
import Gallery4 from "../assets/tes-img4.jpg";
import Gallery5 from "../assets/tes-img5.jpg";
import Gallery6 from "../assets/tes-img6.jpg";
import Gallery7 from "../assets/tes-img7.jpg";
import Gallery8 from "../assets/tes-img8.jpg";
import Gallery9 from "../assets/tes-img9.jpg";
import Gallery10 from "../assets/test1.jpg";
import Gallery11 from "../assets/test2.jpg";
import Gallery12 from "../assets/test3.jpg";
import Gallery13 from "../assets/test4.jpg";

const GalleryItem = ({ imageUrl, altText }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-500 ease-in-out">
      <img src={imageUrl} alt={altText} className="w-full h-60 object-cover" />
    </div>
  );
};

const Gallery = () => {
  const galleryImages = [
    // { imageUrl: "./src/assets/tes-img1.jpg", altText: "Gallery Image 1" },
    { imageUrl: Gallery2, altText: "Gallery Image 2" },
    { imageUrl: Gallery3, altText: "Gallery Image 3" },
    { imageUrl: Gallery4, altText: "Gallery Image 4" },
    { imageUrl: Gallery5, altText: "Gallery Image 5" },
    { imageUrl: Gallery6, altText: "Gallery Image 6" },
    { imageUrl: Gallery7, altText: "Gallery Image 7" },
    { imageUrl: Gallery8, altText: "Gallery Image 8" },
    { imageUrl: Gallery9, altText: "Gallery Image 9" },
    { imageUrl: Gallery10, altText: "Gallery Image 10" },
    { imageUrl: Gallery11, altText: "Gallery Image 11" },
    { imageUrl: Gallery12, altText: "Gallery Image 12" },
    { imageUrl: Gallery13, altText: "Gallery Image 13" },
  ];

  return (
    <main className="bg-white py-12 px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-gray-600">
            Explore the highlights of our journey through these beautiful
            moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 te">
          {galleryImages.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              altText={item.altText}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
