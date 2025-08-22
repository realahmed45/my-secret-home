import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

// Import images
import service1 from "../videos/service1.png";
import service2 from "../videos/service2.png";
import service3 from "../videos/service3.png";
import service4 from "../videos/service4.png";
import service5 from "../videos/service5.png";
import service6 from "../videos/service6.png";
import service7 from "../videos/service7.png";
import service8 from "../videos/service8.png";

const ServiceImage = ({ image, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <img
      src={image}
      alt="Service"
      className="w-full h-auto cursor-pointer object-cover"
      onClick={handleClick}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

const Services = () => {
  const services = [
    { image: service1, url: "/service-1" },
    { image: service2, url: "/service-2" },
    { image: service3, url: "/service-3" },
    { image: service4, url: "/service-4" },
    { image: service5, url: "/service-5" },
    { image: service6, url: "/service-6" },
    { image: service7, url: "/service-7" },
    { image: service8, url: "/service-8" },
  ];

  return (
    <div className="mt-28">
      <Navbar />

      <h1 className="text-[#dc9c34] text-4xl mb-3 font-semibold text-center mt-8">
        Our Services
      </h1>
      <p className="text-center text-sm md:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
        Discover our premium services including relaxing massages, curated
        picnic experiences, and thrilling surfing adventures, all designed to
        enhance your stay.
      </p>
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceImage key={index} image={service.image} url={service.url} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
