// ============================================
// Property5.js - Copy this entire section
// ============================================
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import Calendar from "./calender2";
import ownerimage from "../images/owner.png";
import ownerimagesmall from "../images/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHome,
  faUserFriends,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaToggleOn,
  FaToggleOff,
  FaCheck,
  FaBolt,
} from "react-icons/fa";

const Property5 = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [currentImages, setCurrentImages] = useState([0, 0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(true);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/content/property-5.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load property data");
        return res.json();
      })
      .then((data) => setPropertyData(data))
      .catch((err) => console.error("Error loading property data:", err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.65;
      setIsSticky(window.scrollY <= threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!propertyData)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + propertyData.images.length) %
        propertyData.images.length
    );
  };
  const nextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % propertyData.images.length
    );
  };
  const toggleImage = (index) => {
    setCurrentImages((prev) => {
      const newImages = [...prev];
      newImages[index] = newImages[index] === 0 ? 1 : 0;
      return newImages;
    });
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mt-[64px] px-8 md:px-2 h-[20%]">
        {propertyData.images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className={`relative bg-cover bg-center rounded-lg cursor-pointer ${
              index === 0
                ? "col-span-2 row-span-2 sm:h-full sm:block hidden"
                : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
              height: index === 0 ? "calc(95% + 1rem)" : "170px",
            }}
            onClick={() => openLightbox(index)}
          >
            {index === 4 && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-normal text-lg"></div>
            )}
          </div>
        ))}
      </div>
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <div className="relative">
            <button
              className="absolute -top-4 -right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold z-10 hover:bg-gray-200 transition-colors"
              onClick={closeLightbox}
            >
              ✖
            </button>
            <img
              src={propertyData.images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute left-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="absolute right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-between mt-10 px-8 md:px-20">
        <div className="w-full md:w-3/4 pr-6 mr-12">
          <h2 className="text-3xl font-normal text-[#e0b41c] mb-6">
            {propertyData.title}
          </h2>
          <div className="flex items-center text-1xl space-x-6 mb-10">
            <a
              href="#"
              className="flex items-center text-[#e0b41c] hover:underline"
            >
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              Private room
            </a>
            <a
              href="#"
              className="flex items-center text-[#e0b41c] hover:underline"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              House
            </a>
            <div className="flex items-center text-gray-900">
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
              {propertyData.guests} Guests
            </div>
            <div className="flex items-center text-gray-900">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              {propertyData.bedrooms} Bedroom
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#e0b41c] mb-2">
            Listing Description
          </h3>
          <div className="text-sm text-gray-700 leading-6 space-y-6">
            {propertyData.description.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-small mt-4 mb-4">{section.title}</h4>
                {section.content.map((text, textIdx) => (
                  <p key={textIdx} className="mb-2">
                    {text}
                  </p>
                ))}
                {idx < propertyData.description.sections.length - 1 && (
                  <hr className="my-6" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-info-circle"></i>
                {isPriceOpen ? (
                  <FaToggleOn
                    className="inline ml-2 mt-4 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsPriceOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsPriceOpen(true)}
                  />
                )}
                <span>Price Info</span>
              </div>
            </div>
            {isPriceOpen && (
              <p className="text-sm text-gray-700">
                Price per night: {propertyData.price}
              </p>
            )}
          </div>
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-map-marker-alt"></i>
                {isAddressOpen ? (
                  <FaToggleOn
                    className="inline ml-2 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsAddressOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsAddressOpen(true)}
                  />
                )}
                <span>Address</span>
              </div>
            </div>
            {isAddressOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>Address: {propertyData.address.full}</p>
                <p>City: {propertyData.address.city}</p>
                <p>Area: {propertyData.address.area}</p>
                <p>County: {propertyData.address.county}</p>
                <p>State: {propertyData.address.state}</p>
                <p>Country: {propertyData.address.country}</p>
                <p>Zip: {propertyData.address.zip}</p>
              </div>
            )}
          </div>
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-list"></i>
                {isDetailsOpen ? (
                  <FaToggleOn
                    className="inline ml-2 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsDetailsOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsDetailsOpen(true)}
                  />
                )}
                <span>Details</span>
              </div>
            </div>
            {isDetailsOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>Property Status: {propertyData.propertyStatus}</p>
                <p>Property ID: {propertyData.propertyId}</p>
                <p>Rooms: {propertyData.rooms}</p>
                <p>Bedrooms: {propertyData.bedrooms}</p>
                <p>Bathrooms: {propertyData.bathrooms}</p>
                <p>Check-Out Hour: {propertyData.checkOutHour}</p>
                <p>Check-in Hour: {propertyData.checkInHour}</p>
              </div>
            )}
          </div>
          <div
            className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4 mr-3">
                <i className="fas fa-star"></i>
                {isOpen ? (
                  <FaToggleOn className="inline mr-2 text-[#e0b41c]" />
                ) : (
                  <FaToggleOff className="inline mr-2 text-[#e0b41c]" />
                )}
                <span>Features</span>
              </div>
              <div>
                {isOpen ? (
                  <i className="fas fa-chevron-up text-gray-600"></i>
                ) : (
                  <i className="fas fa-chevron-down text-gray-600"></i>
                )}
              </div>
            </div>
            {isOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 text-sm">
                {Object.entries(propertyData.features).map(
                  ([category, features]) => (
                    <div key={category}>
                      <h4 className="font-medium text-[#e0b41c] mb-2 capitalize">
                        {category.replace(/([A-Z])/g, " $1").trim()}
                      </h4>
                      {features.map((feature, idx) => (
                        <p key={idx}>
                          <FaCheck className="inline mr-2 text-[#e0b41c]" />
                          {feature}
                        </p>
                      ))}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-file-alt"></i>
                {isTermsOpen ? (
                  <FaToggleOn
                    className="inline ml-2 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsTermsOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 text-[#e0b41c] cursor-pointer"
                    onClick={() => setIsTermsOpen(true)}
                  />
                )}
                <span>Terms and Conditions</span>
              </div>
            </div>
            {isTermsOpen && (
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  {propertyData.termsConditions.smokingAllowed ? "✔" : "✖"}{" "}
                  Smoking Allowed
                </p>
                <p>
                  {propertyData.termsConditions.partyAllowed ? "✔" : "✖"} Party
                  Allowed
                </p>
                <p>
                  {propertyData.termsConditions.childrenAllowed ? "✔" : "✖"}{" "}
                  Children Allowed
                </p>
                <p>
                  Cancellation Policy:{" "}
                  {propertyData.termsConditions.cancellationPolicy}
                </p>
                {propertyData.termsConditions.otherRules && (
                  <p>Other Rules: {propertyData.termsConditions.otherRules}</p>
                )}
              </div>
            )}
          </div>
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100 ml-0">
            <div className="flex items-center space-x-1 text-[#e0b41c] text-1xl font-semibold mb-4">
              <i className="fas fa-file-alt"></i>
              <span>Availability</span>
            </div>
            <Calendar />
          </div>
        </div>
        <div className={`md:w-1/4 ${isSticky ? "sticky top-0" : "relative"}`}>
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-semibold text-white mb-4 bg-[#e0b41c] p-3">
              {propertyData.price} per night
            </h3>
            <div className="space-y-5">
              <h4 className="font-medium text-gray-700 mb-2">Book Now</h4>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="inline mr-2 text-[#e0b41c]" />
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full border rounded-md p-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="inline mr-2 text-[#e0b41c]" />
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full border rounded-md p-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-3">
                  <FaUser className="inline mr-2 text-[#e0b41c]" />
                  Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max={propertyData.guests}
                  className="w-full border rounded-md p-3 text-sm"
                  placeholder="Number of guests"
                />
              </div>
            </div>
            <div className="flex items-center mb-4 mt-4">
              <input type="checkbox" className="mr-2" />
              <p className="text-xs text-gray-500">
                I agree to the terms and conditions.
              </p>
            </div>
            <button className="bg-[#e0b41c] text-white w-full py-3 rounded-md flex items-center justify-center text-lg">
              <FaBolt className="inline text-green-400 mr-2" />
              Instant Booking
            </button>
            <div className="flex space-x-2 mt-8 mb-9">
              <button className="border border-gray-400 text-gray-400 bg-white w-1/2 py-3 rounded-md">
                Add to Favorites
              </button>
              <button className="border border-gray-300 text-white bg-gray-400 w-1/2 py-2 rounded-md">
                Contact Owner
              </button>
            </div>
            <div className="mt-6 p-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Advanced Search
              </h4>
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full border rounded-md p-3 text-sm mb-4"
              />
              <div className="space-y-3">
                <div>
                  <label className="block text-1xl text-gray-600">
                    <FaCalendarAlt className="inline mr-2 mb-3 text-[#e0b41c]" />
                    Check-In
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-md p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-1xl text-gray-600 mb-3">
                    <FaCalendarAlt className="inline mr-2 text-[#e0b41c]" />
                    Check-Out
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-md p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-1xl text-gray-600">
                    <FaUser className="inline mr-2 mb-3 text-[#e0b41c]" />
                    Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="w-full border rounded-md p-3 text-sm"
                    placeholder="Number of guests"
                  />
                </div>
              </div>
              <button className="bg-[#e0b41c] text-white w-full py-3 rounded-md mt-4 text-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid lg:w-full h-full mt-20 place-items-center">
        <a href="/home-page" target="_blank" rel="noopener noreferrer">
          <img
            src={ownerimage}
            alt="Bottom Decorative"
            className="w-full object-cover"
          />
        </a>
      </div>
      <div className="block lg:hidden w-full h-full mt-20 place-items-center">
        <a href="/home-page" target="_blank" rel="noopener noreferrer">
          <img
            src={ownerimagesmall}
            alt="Bottom Decorative"
            className="w-full object-cover"
          />
        </a>
      </div>
      {propertyData.similarListings && (
        <div className="mt-16">
          <h2 className="text-[#e0b41c] font-semibold text-lg mb-6 px-24">
            Similar Listings
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-24">
            {propertyData.similarListings.map((property, index) => (
              <div
                key={property.id}
                className="border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(property.route)}
              >
                <div className="relative">
                  <img
                    src={property.images[currentImages[index] || 0]}
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
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Property5;

// ============================================
// COPY THE ABOVE CODE FOR Property5.js
// CHANGE: const Property5 = () => {
// CHANGE: fetch("/content/property-5.json")
// CHANGE: export default Property5;
// ============================================

// ============================================
// COPY THE ABOVE CODE FOR Property6.js
// CHANGE: const Property6 = () => {
// CHANGE: fetch("/content/property-6.json")
// CHANGE: export default Property6;
// ============================================

// ============================================
// COPY THE ABOVE CODE FOR Property7.js
// CHANGE: const Property7 = () => {
// CHANGE: fetch("/content/property-7.json")
// CHANGE: export default Property7;
// ============================================
