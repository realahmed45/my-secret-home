import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const imageUrls = [
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-35-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-73.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-37.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-61.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-11-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-54.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-45-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-51.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-50-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-49-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-45-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-43-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-41-3.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-40.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-67.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-34-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-33.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-31-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-30-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-29-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-28-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-27-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-26-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-25-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-22-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-21-3.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-20-3.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-19-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-17-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-16-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-15-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-14-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-12-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-11-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-10-3.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-7-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-6-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-5-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-3-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-2-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-46-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-43-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-42.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-41-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-39-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-38-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-36-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-35-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-34-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-32-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-30.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-29-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-28-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-27.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-26-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-24.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-23-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-21-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-20-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-19-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-17-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-16-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-15-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-14.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-13-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-12-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-10-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-9-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-7-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-6-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-5-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-4-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-1-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-70.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-69.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-67-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-65.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-63-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-60-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-58-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-56.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-55.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-52.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-50.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-49.png",
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openImage = (index) => {
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  // Handle clicks on the overlay (background) to close the modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeImage();
    }
  };

  return (
    <div>
      <Navbar />

      <div className="pt-28 ">
        <h1 className="text-center text-3xl text-[#dc9c34] font-bold mb-6">
          Our Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden cursor-pointer"
              onClick={() => openImage(index)}
            >
              <img
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {currentImageIndex !== null && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={handleOverlayClick}
          >
            <div className="relative">
              {/* Close button positioned at top-right of the image */}
              <button
                className="absolute -top-4 -right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold z-10 hover:bg-gray-200 transition-colors"
                onClick={closeImage}
              >
                ✖
              </button>

              <img
                src={imageUrls[currentImageIndex]}
                alt={`Large View ${currentImageIndex + 1}`}
                className="max-w-4xl max-h-[80vh] border-4 border-white"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              />
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute top-1/2 left-5 text-white text-4xl transform -translate-y-1/2 focus:outline-none hover:text-gray-300 transition-colors"
              onClick={showPreviousImage}
            >
              {"<"}
            </button>

            <button
              className="absolute top-1/2 right-5 text-white text-4xl transform -translate-y-1/2 focus:outline-none hover:text-gray-300 transition-colors"
              onClick={showNextImage}
            >
              {">"}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
