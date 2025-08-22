import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import client1 from "../images/client1.png"; // Replace with actual path
import client2 from "../images/client2.png"; // Replace with actual path
import client3 from "../images/client3.png"; // Replace with actual path

const TestimonialsSection = () => {
  const clients = [
    {
      name: "Jenny",
      image: client1,
      review:
        "Yuni, the person inside was wonderful. The extra fruit each day was great. Excellent breakfast. Helpful, provided beach towels, massage was OK as a bonus. The common area was nice.",
    },
    {
      name: "Cath",
      image: client2,
      review:
        "Great stay, great host! The accommodation is excellent value for money and really homey. Location amazing, 2 mins walk to the beach and hot tub!!",
    },
    {
      name: "Imen",
      image: client3,
      review:
        "Host are very responsive, kind, and accessible. Kitchen is available to all. Breakfast is very good and generous!! Thank you very much for your attention.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Book Now and Form */}
        <div>
          <h2 className="text-[#e09c34] text-xl font-semibold">
            Clients Testimonials
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Our team is committed to ensuring every aspect of your stay is
            exceptional, from the moment you arrive until your departure.
          </p>
        </div>

        {/* Right Side - Reviews and Contact Us */}
        <div className="space-y-6">
          {/* Active Client Testimonial */}
          <div className="p-4 border border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src={clients[activeIndex].image}
                alt={clients[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold black text-sm">
                  {clients[activeIndex].name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {clients[activeIndex].review}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="p-4  border border-gray-200">
            <h3 className="text-[#e09c34] font-semibold text-sm">Contact Us</h3>
            <p className="text-gray-600 text-sm mt-2">
              We appreciate your trust greatly. Our clients choose us and our
              products because they know we are the best.
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
