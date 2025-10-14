// ============================================
// 5. TESTIMONIALS COMPONENT (testimonials.jsx)
// ============================================
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import testimonialsData from "../content/testimonials.json";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % testimonialsData.reviews.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-[#e09c34] text-xl font-semibold">
            {testimonialsData.heading}
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            {testimonialsData.description}
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-4 border border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src={testimonialsData.reviews[activeIndex].image}
                alt={testimonialsData.reviews[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold black text-sm">
                  {testimonialsData.reviews[activeIndex].name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {testimonialsData.reviews[activeIndex].review}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-200">
            <h3 className="text-[#e09c34] font-semibold text-sm">
              {testimonialsData.contactHeading}
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              {testimonialsData.contactDescription}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-[#e09c34] mr-2" />
                Jl. Courtyard, Seminyak, Kec. Kuta, Kabupaten Badung, Bali,
                Indonesia
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#e09c34] mr-2" />
                +6287840525407
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
