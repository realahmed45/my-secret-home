// PropertyTemplate.jsx - Reusable component for all properties
// Usage: <PropertyTemplate propertyNumber={1} />

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

const PropertyTemplate = ({ propertyNumber }) => {
  const [propertyData, setPropertyData] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(true);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/content/property-${propertyNumber}.json`)
      .then((response) => response.json())
      .then((data) => setPropertyData(data))
      .catch((error) => console.error("Error loading property data:", error));

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.65;
      setIsSticky(window.scrollY <= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [propertyNumber]);

  if (!propertyData) return null;

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

  return (
    <div>
      <Navbar />

      {/* Image Grid */}
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
          />
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <div className="relative">
            <button
              className="absolute -top-4 -right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold z-10"
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
            className="absolute left-4 text-white text-3xl"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      )}

      {/* Main Container */}
      <div className="flex flex-col md:flex-row justify-between mt-10 px-8 md:px-20">
        {/* Left Section */}
        <div className="w-full md:w-3/4 pr-6 mr-12">
          <h2 className="text-3xl font-normal text-[#e0b41c] mb-6">
            {propertyData.title}
          </h2>

          <div className="flex items-center text-1xl space-x-6 mb-10">
            <a href="#" className="flex items-center text-[#e0b41c]">
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              {propertyData.type.split(" · ")[0] || "Private room"}
            </a>
            <a href="#" className="flex items-center text-[#e0b41c]">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {propertyData.type.split(" · ")[1] || "House"}
            </a>
            <div className="flex items-center text-gray-900">
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
              {propertyData.guests} Guests
            </div>
            {propertyData.bedrooms && (
              <div className="flex items-center text-gray-900">
                <FontAwesomeIcon icon={faBed} className="mr-2" />
                {propertyData.bedrooms} Bedroom
                {propertyData.bedrooms > 1 ? "s" : ""}
              </div>
            )}
          </div>

          <h3 className="text-2xl font-semibold text-[#e0b41c] mb-2">
            Listing Description
          </h3>
          <div
            className="text-sm text-gray-700 leading-6 space-y-6"
            dangerouslySetInnerHTML={{
              __html: propertyData.description
                .replace(/\n/g, "<br/>")
                .replace(/##/g, '<h4 class="font-small mb-4 mt-4">')
                .replace(/\*\*/g, "<strong>")
                .replace(/\n\n/g, '<p class="mb-4">'),
            }}
          />

          {/* Price Info Card */}
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-info-circle"></i>
                {isPriceOpen ? (
                  <FaToggleOn
                    className="inline ml-2 mt-4 cursor-pointer"
                    onClick={() => setIsPriceOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 cursor-pointer"
                    onClick={() => setIsPriceOpen(true)}
                  />
                )}
                <span>Price Info</span>
              </div>
            </div>
            {isPriceOpen && (
              <p className="text-sm text-gray-700">
                Price per night: ${propertyData.price}
              </p>
            )}
          </div>

          {/* Address Card */}
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-map-marker-alt"></i>
                {isAddressOpen ? (
                  <FaToggleOn
                    className="inline ml-2 cursor-pointer"
                    onClick={() => setIsAddressOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 cursor-pointer"
                    onClick={() => setIsAddressOpen(true)}
                  />
                )}
                <span>Address</span>
              </div>
            </div>
            {isAddressOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>Address: {propertyData.address}</p>
                <p>City: {propertyData.city}</p>
                <p>State: {propertyData.state}</p>
                <p>Country: {propertyData.country}</p>
                <p>Zip: {propertyData.zip}</p>
              </div>
            )}
          </div>

          {/* Details Card */}
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-list"></i>
                {isDetailsOpen ? (
                  <FaToggleOn
                    className="inline ml-2 cursor-pointer"
                    onClick={() => setIsDetailsOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 cursor-pointer"
                    onClick={() => setIsDetailsOpen(true)}
                  />
                )}
                <span>Details</span>
              </div>
            </div>
            {isDetailsOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>Property ID: {propertyData.propertyId}</p>
                {propertyData.bedrooms && (
                  <p>Bedrooms: {propertyData.bedrooms}</p>
                )}
                {propertyData.bathrooms && (
                  <p>Bathrooms: {propertyData.bathrooms}</p>
                )}
                {propertyData.checkOutHour && (
                  <p>Check-Out Hour: {propertyData.checkOutHour}</p>
                )}
                {propertyData.checkInHour && (
                  <p>Check-in Hour: {propertyData.checkInHour}</p>
                )}
              </div>
            )}
          </div>

          {/* Features Header */}
          <div
            className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-star"></i>
                {isOpen ? (
                  <FaToggleOn className="inline mr-2" />
                ) : (
                  <FaToggleOff className="inline mr-2" />
                )}
                <span>Features</span>
              </div>
            </div>
            {isOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm">
                {propertyData.bathroomFeatures && (
                  <div>
                    <h4 className="font-medium text-[#e0b41c] mb-2">
                      Bathroom
                    </h4>
                    {propertyData.bathroomFeatures.map((feature, i) => (
                      <p key={i}>
                        <FaCheck className="inline mr-2 text-[#e0b41c]" />
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
                {propertyData.bedBathFeatures && (
                  <div>
                    <h4 className="font-medium text-[#e0b41c] mb-2">
                      Bed and Bath
                    </h4>
                    {propertyData.bedBathFeatures.map((feature, i) => (
                      <p key={i}>
                        <FaCheck className="inline mr-2 text-[#e0b41c]" />
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
                {propertyData.entertainmentFeatures && (
                  <div>
                    <h4 className="font-medium text-[#e0b41c] mb-2">
                      Entertainment
                    </h4>
                    {propertyData.entertainmentFeatures.map((feature, i) => (
                      <p key={i}>
                        <FaCheck className="inline mr-2 text-[#e0b41c]" />
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
                {propertyData.heatingCoolingFeatures && (
                  <div>
                    <h4 className="font-medium text-[#e0b41c] mb-2">
                      Heating and Cooling
                    </h4>
                    {propertyData.heatingCoolingFeatures.map((feature, i) => (
                      <p key={i}>
                        <FaCheck className="inline mr-2 text-[#e0b41c]" />
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
                {propertyData.kitchenFeatures && (
                  <div>
                    <h4 className="font-medium text-[#e0b41c] mb-2">Kitchen</h4>
                    {propertyData.kitchenFeatures.map((feature, i) => (
                      <p key={i}>
                        <FaCheck className="inline mr-2 text-[#e0b41c]" />
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
                {propertyData.servicesFeatures && (
                  <div>
                    <h4 className="font-medium text-[#e0b41c] mb-2">
                      Services
                    </h4>
                    {propertyData.servicesFeatures.map((feature, i) => (
                      <p key={i}>
                        <FaCheck className="inline mr-2 text-[#e0b41c]" />
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Terms and Conditions Card */}
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#e0b41c] text-1xl font-semibold mb-4">
                <i className="fas fa-file-alt"></i>
                {isTermsOpen ? (
                  <FaToggleOn
                    className="inline ml-2 cursor-pointer"
                    onClick={() => setIsTermsOpen(false)}
                  />
                ) : (
                  <FaToggleOff
                    className="inline ml-2 cursor-pointer"
                    onClick={() => setIsTermsOpen(true)}
                  />
                )}
                <span>Terms and Conditions</span>
              </div>
            </div>
            {isTermsOpen && (
              <div className="text-sm text-gray-700 space-y-2">
                <p>{propertyData.smokingAllowed ? "✔" : "✖"} Smoking Allowed</p>
                <p>{propertyData.partyAllowed ? "✔" : "✖"} Party Allowed</p>
                <p>
                  {propertyData.childrenAllowed ? "✔" : "✖"} Children Allowed
                </p>
                <p>Cancellation Policy: {propertyData.cancellationPolicy}</p>
                {propertyData.otherRules && (
                  <p>Other Rules: {propertyData.otherRules}</p>
                )}
              </div>
            )}
          </div>

          {/* Availability card */}
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100 ml-0">
            <div className="flex items-center space-x-1 text-[#e0b41c] text-1xl font-semibold mb-4">
              <i className="fas fa-file-alt"></i>
              <span>Availability</span>
            </div>
            <Calendar />
          </div>
        </div>

        {/* Right Section - Booking Card */}
        <div className={`md:w-1/4 ${isSticky ? "sticky top-0" : "relative"}`}>
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-semibold text-white mb-4 bg-[#e0b41c] p-3">
              ${propertyData.price} per night
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

            {/* Advanced Search */}
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

      {/* Bottom Image */}
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

      <Footer />
    </div>
  );
};

export default PropertyTemplate;
