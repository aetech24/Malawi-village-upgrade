import React from "react";

const GalleryItem = ({ imageUrl, altText }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all ">
      <img src={imageUrl} alt={altText} className="w-full h-60 object-cover" />
    </div>
  );
};

const Gallery = () => {
  const galleryImages = [
    // { imageUrl: "./src/assets/tes-img1.jpg", altText: "Gallery Image 1" },
    { imageUrl: "./src/assets/tes-img2.jpg", altText: "Gallery Image 2" },
    { imageUrl: "./src/assets/tes-img3.jpg", altText: "Gallery Image 3" },
    { imageUrl: "./src/assets/tes-img4.jpg", altText: "Gallery Image 4" },
    { imageUrl: "./src/assets/tes-img5.jpg", altText: "Gallery Image 5" },
    { imageUrl: "./src/assets/tes-img6.jpg", altText: "Gallery Image 6" },
    { imageUrl: "./src/assets/tes-img7.jpg", altText: "Gallery Image 7" },
    { imageUrl: "./src/assets/tes-img8.jpg", altText: "Gallery Image 8" },
    { imageUrl: "./src/assets/tes-img9.jpg", altText: "Gallery Image 9" },
    { imageUrl: "./src/assets/test1.jpg", altText: "Gallery Image 10" },
    { imageUrl: "./src/assets/test2.jpg", altText: "Gallery Image 11" },
    { imageUrl: "./src/assets/test3.jpg", altText: "Gallery Image 12" },
    { imageUrl: "./src/assets/test4.jpg", altText: "Gallery Image 13" }
  ];

  return (
    <main className="bg-white py-12 px-4 md:px-10 " >
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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