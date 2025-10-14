// ============================================
// 2. HOMEPAGE COMPONENT (homepage.jsx)
// ============================================
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import TestimonialsSection from "./testimonials";
import BookingCalendar from "./calender";
import {
  FaMapMarkerAlt,
  FaSuitcase,
  FaShoppingCart,
  FaUtensils,
  FaInfinity,
  FaWater,
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaUserFriends,
  FaDog,
  FaCat,
  FaFish,
  FaDove,
  FaUmbrellaBeach,
} from "react-icons/fa";

// Import JSON files
import homepageSearch from "../content/homepage-search.json";
import homepageProperties from "../content/homepage-properties.json";
import homepageWhyChoose from "../content/homepage-why-choose.json";

// Import property images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";

const Homepage = () => {
  const navigate = useNavigate();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0 });
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0, 0, 0, 0]);

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev);
  const toggleGuestSelector = () => setIsGuestSelectorOpen((prev) => !prev);

  const propertyCategories = [
    { name: "", icon: <FaUserFriends /> },
    { name: "", icon: <FaDog /> },
    { name: "", icon: <FaCat /> },
    { name: "", icon: <FaFish /> },
    { name: "", icon: <FaDove /> },
    { name: "", icon: <FaUmbrellaBeach /> },
  ];

  const properties = [
    {
      id: 1,
      images: [image1, image2],
      tags: ["Featured", "For Sale"],
      title:
        "Room 1 (India) - Private room in guesthouse in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$89/night",
    },
    {
      id: 2,
      images: [image3, image4],
      tags: ["Featured", "For Rent"],
      title: "Room 2 (Nepal) - Room in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$88/night",
    },
    {
      id: 3,
      images: [image5, image6],
      tags: ["Featured", "For Rent"],
      title: "Room 3 (Spa) - Room in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$89/night",
    },
    {
      id: 4,
      images: [image7, image8],
      tags: ["Featured", "For Rent"],
      title:
        "Room 4 (Easy) - Private room in guesthouse in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$88/night",
    },
    {
      id: 5,
      images: [image1, image2],
      tags: ["Featured", "For Rent"],
      title:
        "Room 5 (India) - Private room in guesthouse in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$89/night",
    },
    {
      id: 6,
      images: [image3, image4],
      tags: ["Featured", "For Rent"],
      title:
        "Room 6 (India) - Private room in guesthouse in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$89/night",
    },
    {
      id: "villa",
      images: [image5, image6],
      tags: ["Featured", "For Rent"],
      title: "Full Villa - Entire villa in Kecamatan Kuta, Indonesia",
      type: "Villa · Entire place",
      guests: "12 Guests · 6 Bedrooms · 6 Bathrooms",
      price: "$850/night",
    },
  ];

  const routes = [
    "/property-1",
    "/property-2",
    "/property-3",
    "/property-4",
    "/property-5",
    "/property-6",
    "/villa",
  ];

  const toggleImage = (index) => {
    setCurrentImages((prev) => {
      const newImages = [...prev];
      newImages[index] = newImages[index] === 0 ? 1 : 0;
      return newImages;
    });
  };

  // Icon mapping for features
  const featureIcons = {
    "Exceptional Location": (
      <FaMapMarkerAlt className="text-[#b98d1c] text-2xl mr-3" />
    ),
    "Tailored Packages": (
      <FaSuitcase className="text-[#b98d1c] text-2xl mr-3" />
    ),
    "Luxurious Accommodations": (
      <FaShoppingCart className="text-[#b98d1c] text-2xl mr-3" />
    ),
    "Commitment to Excellence": (
      <FaInfinity className="text-[#b98d1c] text-2xl mr-3" />
    ),
    "Stunning Amenities": <FaWater className="text-[#b98d1c] text-2xl mr-3" />,
    "Culinary Delights": (
      <FaUtensils className="text-[#b98d1c] text-2xl mr-3" />
    ),
  };

  return (
    <div className="relative w-full h-screen">
      <Navbar />

      {/* Search Bar Section - Dynamic */}
      <div className="bg-white py-10 mt-20">
        {/* Desktop Search Bar */}
        <div className="w-11/12 md:w-3/4 bg-[#e0dcd4] shadow-lg rounded-lg p-4 mx-auto hidden md:block mb-10">
          <div className="flex items-center justify-between space-x-4">
            <div className="relative flex-1">
              <div
                className="flex items-center space-x-2 cursor-pointer p-2"
                onClick={toggleCalendar}
              >
                <FaCalendarAlt className="text-[#e09c34]" />
                <p className="text-gray-600">{homepageSearch.checkInText}</p>
              </div>
              {isCalendarOpen && (
                <div className="absolute top-full mt-2 bg-white border shadow-lg rounded-lg p-4 z-10">
                  <label className="block mb-2 text-sm font-semibold text-gray-600">
                    Check-In Date:
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
                  />
                  <label className="block mb-2 text-sm font-semibold text-gray-600">
                    Check-Out Date:
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
                  />
                </div>
              )}
            </div>

            <div className="relative flex-1">
              <div
                className="flex items-center space-x-2 cursor-pointer p-2"
                onClick={toggleGuestSelector}
              >
                <FaUser className="text-[#e09c34]" />
                <p className="text-gray-600">{homepageSearch.guestsText}</p>
              </div>
              {isGuestSelectorOpen && (
                <div className="absolute top-full mt-2 bg-white border shadow-lg rounded-lg p-4 z-10">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-gray-600">
                      {homepageSearch.adultsLabel}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            adults: Math.max(0, prev.adults - 1),
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span>{guests.adults}</span>
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            adults: prev.adults + 1,
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-gray-600">
                      {homepageSearch.childrenLabel}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            children: Math.max(0, prev.children - 1),
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span>{guests.children}</span>
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            children: prev.children + 1,
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-semibold text-gray-600">
                      {homepageSearch.infantsLabel}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            infants: Math.max(0, prev.infants - 1),
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span>{guests.infants}</span>
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            infants: prev.infants + 1,
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-[#e09c34] font-semibold"
                    onClick={toggleGuestSelector}
                  >
                    {homepageSearch.closeText}
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center bg-[#e09c34] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#d89332]"
            >
              <FaSearch className="mr-2" />
              {homepageSearch.searchButtonText}
            </button>
          </div>
        </div>

        {/* Property Section - Dynamic */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase text-1xl tracking-wide text-gray-600 font-semibold">
            {homepageProperties.subtitle}
          </p>
          <h2 className="text-2xl font-semibold text-[#e09c34] mt-4">
            {homepageProperties.title}
          </h2>
        </div>

        {/* Property Categories */}
        <div className="flex flex-wrap justify-center gap-6 mt-3">
          {propertyCategories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 cursor-pointer hover:text-border border-gray-200 rounded-lg transition-all duration-200 mt-3 mb-10"
            >
              <div className="text-2xl">{category.icon}</div>
              <p className="text-sm font-small text-gray-600">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Property Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-24">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(routes[index])}
            >
              <div className="relative">
                <img
                  src={property.images[currentImages[index]]}
                  alt={property.title}
                  className="w-full h-56 object-cover border rounded-sm"
                />
                <button className="absolute top-2 left-2 bg-yellow-500 text-white text-xs py-1 px-2 rounded-md">
                  {property.tags[0]}
                </button>
                <button className="absolute top-2 right-2 bg-gray-900 text-white text-xs py-1 px-2 rounded-md">
                  {property.tags[1]}
                </button>
                <button
                  className="absolute bottom-2 left-2 bg-white p-1 rounded-full shadow"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleImage(index);
                  }}
                >
                  <FaChevronLeft className="text-black" />
                </button>
                <button
                  className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleImage(index);
                  }}
                >
                  <FaChevronRight className="text-black" />
                </button>
              </div>
              <div className="p-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">{property.title}</h3>
                  <button className="text-gray-500 hover:text-red-500">
                    <FaHeart />
                  </button>
                </div>
                <p className="text-xs text-gray-600">{property.type}</p>
                <p className="text-xs text-gray-600">{property.guests}</p>
                <p className="text-md font-normal text-[#e09c34] mt-2">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section - Dynamic */}
        <div className="py-24 bg-white">
          <h1 className="text-center text-1xl lg:text-1x1 font-normal text-black mb-2">
            {homepageWhyChoose.sectionLabel}
          </h1>
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-[#e09c34] mb-0">
            {homepageWhyChoose.heading}
          </h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16">
            {homepageWhyChoose.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-center mt-8 h-36"
              >
                <div className="flex items-center justify-center">
                  {featureIcons[feature.title] || (
                    <FaMapMarkerAlt className="text-[#b98d1c] text-2xl mr-3" />
                  )}
                  <h3 className="text-lg font-normal text-[#b98d1c]">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BookingCalendar />
        <TestimonialsSection />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
