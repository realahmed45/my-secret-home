import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const TravelTourCard = ({ image, price, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="Travel & Tour"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="text-[#dc9c34] text-2xl mt-2 text-center">
        {" "}
        BassamAgi Travelling Agency{" "}
      </p>
      <p className="text-black text-lg font-semibold mt-2 text-center">
        Travel & Tour
      </p>
      <p className="text-black font-bold text-lg text-center">${price}</p>
    </div>
  );
};

const TravelTourCards = () => {
  const cards = [
    {
      image: "https://mysecrethomebali.com/wp-content/uploads/2024/09/2.png",
      price: 500,
      url: "/travel-description",
    },
    {
      image: "https://mysecrethomebali.com/wp-content/uploads/2024/09/2.png",
      price: 500,
      url: "/travel-description",
    },
    {
      image: "https://mysecrethomebali.com/wp-content/uploads/2024/09/2.png",
      price: 500,
      url: "/travel-description",
    },
    {
      image: "https://mysecrethomebali.com/wp-content/uploads/2024/09/2.png",
      price: 500,
      url: "/travel-description",
    },
    {
      image: "https://mysecrethomebali.com/wp-content/uploads/2024/09/2.png",
      price: 500,
      url: "/travel-description",
    },
    {
      image: "https://mysecrethomebali.com/wp-content/uploads/2024/09/2.png",
      price: 500,
      url: "/travel-description",
    },
  ];

  return (
    <div className="  mt-20">
      <Navbar />

      <h1 className=" text-black text-4xl font-semibold text-center mt-8">
        Travels & Tour
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 mr-28 ml-28 gap-6">
        {cards.map((card, index) => (
          <TravelTourCard
            key={index}
            image={card.image}
            price={card.price}
            url={card.url}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TravelTourCards;
