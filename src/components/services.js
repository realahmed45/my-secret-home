// ============================================
// 4. SERVICES LIST COMPONENT (services.jsx)
// ============================================
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import servicesIntro from "../content/services-intro.json";
import servicesList from "../content/services-list.json";

const ServiceImage = ({ image, url }) => {
  const navigate = useNavigate();
  return (
    <img
      src={image}
      alt="Service"
      className="w-full h-auto cursor-pointer object-cover"
      onClick={() => navigate(url)}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

const Services = () => {
  return (
    <div className="mt-28">
      <Navbar />
      <h1 className="text-[#dc9c34] text-4xl mb-3 font-semibold text-center mt-8">
        {servicesIntro.title}
      </h1>
      <p className="text-center text-sm md:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
        {servicesIntro.description}
      </p>
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {servicesList.services.map((service, index) => (
            <ServiceImage key={index} image={service.image} url={service.url} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
