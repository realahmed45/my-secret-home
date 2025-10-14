import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    fetch("/content/gallery.json")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error("Error loading gallery data:", error));
  }, []);

  const openImage = (index) => {
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.images.length - 1 : prevIndex - 1
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeImage();
    }
  };

  if (!galleryData) return null;

  return (
    <div>
      <Navbar />

      <div className="pt-28">
        <h1 className="text-center text-3xl text-[#dc9c34] font-bold mb-6">
          {galleryData.title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {galleryData.images.map((url, index) => (
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
              <button
                className="absolute -top-4 -right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold z-10 hover:bg-gray-200 transition-colors"
                onClick={closeImage}
              >
                ✖
              </button>

              <img
                src={galleryData.images[currentImageIndex]}
                alt={`Large View ${currentImageIndex + 1}`}
                className="max-w-4xl max-h-[80vh] border-4 border-white"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

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
