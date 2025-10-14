// ============================================
// 1. ROOMS COMPONENT (rooms.jsx)
// ============================================
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Calendar from "./calender2";

// Import JSON files
import roomsIntro from "../content/rooms-intro.json";
import roomsTabs from "../content/rooms-tabs.json";
import roomsFaqs from "../content/rooms-faqs.json";

// Image URLs
const images1 = [
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-9-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-95.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-56.png",
];

const images = [
  "https://mysecrethomebali.com/wp-content/uploads/2023/11/Rectangle-1214-600x495.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1194-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1195-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1196-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1197-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/9I-768x575.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/8H-768x575.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/17Q-768x580.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/11-K-768x575.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/16P-768x573.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-16-2-400x314.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-6-2-400x314.png",
];

const Rooms = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Intro Section - Dynamic */}
      <section className="mt-8 px-4 md:px-12 lg:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#dc9c34] mb-7 mt-20">
          {roomsIntro.heading}
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
          {roomsIntro.description}
        </p>
      </section>

      {/* Tabs - Dynamic */}
      <div className="mt-6 mb-10 px-4 md:px-40">
        <div className="flex flex-col md:flex-row justify-between overflow-auto text-center text-[#e0b41c] border-t border-b border-[#e0e0e0] py-2">
          {roomsTabs.rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveSection(room.id)}
              className={`text-lg font-normal py-2 px-4 rounded-md ${
                activeSection === room.id
                  ? "text-black bg-gray-100"
                  : "hover:bg-gray-50 text-[#e0b41c]"
              }`}
            >
              {room.tabTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Content - Dynamic */}
      <section className="mt-6 mb-20 px-4 md:px-12 lg:px-40 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#dc9c34] mb-4">
            {roomsTabs.rooms[activeSection - 1].heading}
            <Link
              to={roomsTabs.rooms[activeSection - 1].propertyLink}
              className="text-black text-1xl ml-6 font-normal mb-20"
            >
              For more info click here
            </Link>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-4 leading-loose">
            {roomsTabs.rooms[activeSection - 1].description}
          </p>
          <ul className="list-none text-sm md:text-base text-gray-700 mb-4">
            {roomsTabs.rooms[activeSection - 1].tickPoints.map(
              (point, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  {point}
                </li>
              )
            )}
          </ul>
          {activeSection <= 4 && (
            <button className="bg-[#dc9c34] text-white py-2 px-4 md:px-6 shadow-md hover:bg-[#d19a1a]">
              Book Now
            </button>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={roomsTabs.rooms[activeSection - 1].image}
            alt={roomsTabs.rooms[activeSection - 1].tabTitle}
            className="w-full max-w-[550px] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Image Gallery */}
      <div className="lg:mt-4 mb-20 px-4 md:px-20 lg:mr-48">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity duration-300 ml-14"
                style={{ height: "150px", objectFit: "cover", width: "100%" }}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3 text-right p-0">
            <h2 className="text-3xl ml-20 font-bold text-[#dc9c34] text-center">
              Your Ideal Bali Retreat Awaits at Our Serene Beach Home
            </h2>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-2xl font-bold"
            onClick={closeModal}
          >
            ✖
          </button>
          <div className="flex items-center">
            <button className="text-white text-2xl mr-4" onClick={prevImage}>
              ❮
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Gallery ${currentImageIndex + 1}`}
              className="rounded-lg max-h-[80vh] max-w-[90vw]"
            />
            <button className="text-white text-2xl ml-4" onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}

      <Calendar />

      {/* FAQs Section - Dynamic */}
      <section className="py-40">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#dc9c34] text-center mb-6">
            {roomsFaqs.heading}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            {roomsFaqs.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
            {roomsFaqs.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-10 w-[80%] hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-1xl font-semibold text-[#dc9c34] mb-4">
                  {faq.question}
                </h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm leading-relaxed">
                  {faq.answer.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
