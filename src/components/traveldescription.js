import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const TravelDescription = () => {
  const [openImage, setOpenImage] = useState(null);
  const [travelData, setTravelData] = useState(null);

  // Load JSON data
  useEffect(() => {
    fetch("/content/travel-description.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load travel data");
        return res.json();
      })
      .then((data) => setTravelData(data))
      .catch((err) => console.error("Error loading travel data:", err));
  }, []);

  const handleImageClick = (url) => {
    setOpenImage(url);
  };

  const closeImage = () => {
    setOpenImage(null);
  };

  // Show loading state
  if (!travelData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-20 mb-5">
          {travelData.title}
        </h1>
        <img src={travelData.mainImage} alt="Main Banner" className="w-full" />
        <div className="text-lg mt-5">
          <h1 className="font-normal text-2xl mb-3 mt-5">
            {travelData.heading}
          </h1>
          <p>{travelData.introduction}</p>

          <h2 className="font-normal mt-6 mb-4">{travelData.sectionTitle}</h2>
          <ol className="list-decimal ml-5">
            {travelData.expectations.map((expectation, index) => (
              <li key={index} className="my-3">
                <strong>{expectation.title}:</strong> {expectation.description}
              </li>
            ))}
          </ol>

          <p className="mt-5 mb-7">{travelData.conclusion}</p>
        </div>

        <div className="grid grid-cols-3 gap-0 mt-5">
          {travelData.galleryImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-60 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleImageClick(url)}
            />
          ))}
        </div>
      </div>

      {openImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeImage}
        >
          <img
            src={openImage}
            alt="Opened Image"
            className="max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={closeImage}
          >
            ×
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default TravelDescription;
