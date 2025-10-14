// ============================================
// 7. TRAVEL TOUR CARDS COMPONENT (travel.jsx)
// ============================================
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import travelData from "../content/travel.json";

const TravelTourCard = ({ image, price, url, agencyName, serviceType }) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => navigate(url)}
    >
      <img
        src={image}
        alt="Travel & Tour"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="text-[#dc9c34] text-2xl mt-2 text-center">{agencyName}</p>
      <p className="text-black text-lg font-semibold mt-2 text-center">
        {serviceType}
      </p>
      <p className="text-black font-bold text-lg text-center">${price}</p>
    </div>
  );
};

const TravelTourCards = () => {
  const cards = Array(6).fill({
    image: travelData.cardImage,
    price: travelData.price,
    url: "/travel-description",
    agencyName: travelData.agencyName,
    serviceType: travelData.serviceType,
  });

  return (
    <div className="mt-20">
      <Navbar />
      <h1 className="text-black text-4xl font-semibold text-center mt-8">
        {travelData.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 mr-28 ml-28 gap-6">
        {cards.map((card, index) => (
          <TravelTourCard key={index} {...card} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TravelTourCards;
