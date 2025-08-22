import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Calendar from "./calender2";
import ownerimage from "../images/owner.png";
import rentalimage from "../images/featured-listing.png";
import ownerimagesmall from "../images/image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHome,
  faUserFriends,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaMapMarkerAlt,
  FaArrowDown,
  FaSuitcase,
  FaShoppingCart,
  FaUtensils,
  FaInfinity,
  FaWater,
  FaCalendarAlt,
  FaUser,
  FaFacebookF,
  FaEnvelope,
  FaPinterestP,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaBuilding,
  FaHome,
  FaBed,
  FaSearch,
  FaUmbrellaBeach,
  FaSlidersH,
  FaToggleOn,
  FaToggleOff,
  FaCheck,
  FaHandSparkles,
  FaChargingStation,
  FaBolt,
} from "react-icons/fa";

// Import property images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";

const images = [
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-15-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-9-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-1-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-4-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-6-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-7-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-8-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-10-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-11-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-12-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-13-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-14-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-16-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-17-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-18-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-19-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-20-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-21-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-22-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-23-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-24-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-25-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-26-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-27-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-28-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-29-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-30-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-31-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-32-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-33-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-34-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-35-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-36-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-37-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-38-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-39-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-40-1.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-41-1.png",
];

const Property1 = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.65;
      if (window.scrollY > threshold) {
        setIsSticky(false); // Stops being sticky after 65% of the viewport height
      } else {
        setIsSticky(true); // Stays sticky until 65% of the viewport height
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0]);
  const navigate = useNavigate();

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(true);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const toggleFeatures = () => {
    setIsOpen(!isOpen);
  };
  const ScrollToggleSection = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const threshold = window.innerHeight * 0.7;
        if (window.scrollY > threshold) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const properties = [
    {
      id: 3,
      images: [image5, image6],
      tags: ["Featured", "For Rent"],
      title: "Room in Kecamatan Kuta, Indonesia",
      type: "House · 2 Bedrooms · 1 Bathroom",
      guests: "4 Guests · 2 Bedrooms · 1 Bathroom",
      price: "$155/night",
    },
    {
      id: 4,
      images: [image7, image8],
      tags: ["Featured", "For Rent"],
      title: "Private room in guesthouse in Kecamatan Kuta, Indonesia",
      type: "House · Shared room",
      guests: "4 Guests · 1 Bedroom · 1 Bathroom",
      price: "$117/night",
    },
  ];

  const routes = ["/property-4", "/property-3"];

  const toggleImage = (index) => {
    setCurrentImages((prev) => {
      const newImages = [...prev];
      newImages[index] = newImages[index] === 0 ? 1 : 0;
      return newImages;
    });
  };

  const [showGuestModal, setShowGuestModal] = useState(false);
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0 });

  return (
    <div>
      <Navbar />

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mt-[64px] px-8 md:px-2 h-[20%]">
        {images.slice(0, 5).map((image, index) => (
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

      {/* Lightbox */}
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
              src={images[currentIndex]}
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

      {/* Main Container */}
      <div className="flex flex-col md:flex-row justify-between mt-10 px-8 md:px-20">
        {/* Left Section */}
        <div className="w-full md:w-3/4 pr-6 mr-12">
          <h2 className="text-3xl font-normal text-[#e0b41c] mb-6">
            Private room in guesthouse in Kecamatan Kuta, Indonesia
          </h2>
          <div className="flex items-center text-1xl space-x-6  mb-10">
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
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />2 Guests
            </div>
            <div className="flex items-center text-gray-900">
              <FontAwesomeIcon icon={faBed} className="mr-2" />1 Bedroom
            </div>
          </div>
          <h3 className=" text-2xl font-semibold text-[#e0b41c] mb-2">
            Listing Description
          </h3>
          <div className="text-sm text-gray-700 leading-6 space-y-6">
            <div>
              <h4 className="font-small mt-4 mb-4">About this space</h4>

              <p className="mb-2">
                ✦ Enjoy a bathtub in a private garden of your own room!
              </p>
              <p className="mb-4">
                Our SPA Room is a delight! Privacy and confort in the best
                location. Be sure to relax in the end of the day with a proper
                bubble bath and big bed… or request a in-room massage with our
                house specialists.
              </p>
              <p className="mb-4">
                Booking this room grants access to all facilities in the house;
                like our pool area or secret gardens. Enjoy a fully equiped
                kitchen or a short walk to the beach, only a minute walk away…
              </p>
            </div>
            <div>
              <h4 className="font-small mb-4 mt-4">The space</h4>
              <p className="mb-2">🏛Room 03 – The Spa Room</p>
              <p className="mb-4">
                Introducing our spacious room, the perfect retreat for those
                seeking a comfortable and luxurious stay. When you enter, you’ll
                find a roomy setting with a luxurious king-sized bed that offers
                the utmost in comfort and relaxation. No matter the weather
                outside, you may enjoy your stay in comfort thanks to the fan
                and AC in the room, beyond the local along-along ceelings
                natural cool.
              </p>
              <p className="mb-2">
                ✔This room has a private spacious bathroom, featuring a private
                and relaxing BATHTUB room where you can soak your worries away.
                The bathroom is designed with your comfort in mind, providing
                plenty of space for you to get ready and relax during your stay.
              </p>
              <p className="mb-2">✔Two Roomy Places for Clothing</p>
              <p className="mb-2">
                ✔Outside seating area to take advantage of the cool wind and the
                lovely surroundings.
              </p>
              <p className="mb-2">✔ Pillows, Linens, and Sheets</p>
              <p className="mb-2">✔ Closet with Hangers and Shelves</p>
              <p className="mb-4">✔ Cabinet with Spacious Drawers</p>
            </div>
            <hr className="my-6" />
            <div>
              <h4 className="font-small mb-4 mt-4">★★LIVING AREA</h4>
              <p className="mb-4">
                Enjoy a leisurely afternoon with your family and friends while
                lounging on comfortable chairs and watching your favorite film.
                All of the rooms have access to the shared living area, which
                offers enough of space to ensure that your stay is enjoyable.
              </p>
              <p className="mb-2">✔ Projector</p>
              <p className="mb-2">✔ Large Size bed Sofa</p>
              <p className="mb-2">✔ Ultra Comfortable Sofa Chairs</p>
              <p className="mb-2">
                ✔ Plenty of area for you to work in relaxed areas super
                excellent for dancing area
              </p>
              <p className="mb-2">✔ FANs</p>
              <p className="mb-4">
                ✔ Spacious Open concept living space with lots of natural
                lighting and sitting areas!
              </p>
            </div>
            <hr className="my-6" />
            <div>
              <h4 className="font-small mb-4 mt-4">🏘 KITCHEN & DINING</h4>
              <p className="mb-4">
                The kitchen is furnished with modern cooking utensils and has a
                Wooden scheme. There are numerous working spaces and spacious
                countertops in the kitchen.
              </p>
              <p className="mb-2">✔ Stainless Steel Stovetop</p>
              <p className="mb-2">✔ Pizza fire place</p>
              <p className="mb-2">✔ Grill</p>
              <p className="mb-2">✔ 3 Stainless Steel Refrigerator & Freezer</p>
              <p className="mb-2">✔ Knife Set & Basic Cooking Utensils</p>
              <p className="mb-2">✔ Plates, Silverware, Trays, Pots & Pan</p>
              <p className="mb-2">✔ Cups, Coffee Mugs, Wine Glasses</p>
              <p className="mb-2">
                ✔ Ample Counter Space with Island & High-top Seating
              </p>
              <p className="mb-2">✔ Sink</p>
              <p className="mb-2">✔ Stove + Refrigerator/Freezer</p>
              <p className="mb-2">✔ Coffee Maker and Coffee Included</p>
              <p className="mb-4">Best equipped kitchen you can find</p>
              <p className="mb-4">
                Dine like royalty in the spacious dining area overlooking the
                backyard
              </p>
              <p className="mb-4">✔ Dining areas for as many as 30 people</p>
            </div>
            <hr className="my-6" />
            <div>
              <h4 className="font-small mb-4 mt-4">🏛 Parking</h4>
              <p className="mb-4">
                Scooter can be parked directly in the property while Cars can be
                accommodated in the private parking 20 meters away.
              </p>
              <p className="mb-4">✔ There is a free Parking</p>
            </div>
            <hr className="my-6" />
            <div>
              <h4 className="font-small mb-4 mt-4">🏘 LAUNDRY AREA</h4>
              <p className="mb-2">✔Cleaning Essentials</p>
              <p className="mb-4">✔Electric Iron</p>
            </div>
            <hr className="my-6" />
            <div>
              <h4 className="font-small mb-4 mt-4">Guest access</h4>
              <p className="mb-4">
                The Guests has complete access to the private room and private
                bathroom with personal garden without interruption or sharing of
                anyone else.
              </p>
              <p className="mb-2">Shared Spaced are :</p>
              <p className="mb-2">✔Living Area</p>
              <p className="mb-2">✔2 Kitchens</p>
              <p className="mb-2">✔Pool and lounge</p>
              <p className="mb-4">✔Other additional areas</p>
            </div>
            <hr className="my-6" />
            <div>
              <h4 className="font-small mb-4 mt-4">Other things to note</h4>
              <p className="mb-2">✦Check-in to rooms is 2pm – 8pm.</p>
              <p className="mb-4">
                If you need to arrive early you can leave your bags and enjoy
                the social area. Guests coming in after 8pm will have to pay a
                small extra fee (100k) due to the fact that building waits for
                welcoming you them after their due time.
              </p>
              <p className="mb-2">✦ Check-out time is 11 am</p>
              <p className="mb-2">
                (and you can leave you luggage in-house until 8pm)
              </p>
              <p className="mb-2">✦No smoking inside – Outside is fine</p>
              <p className="mb-2">Please respect our gardens, enjoy them.</p>
            </div>
          </div>
          {/* Price Info Card */}
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
              <p className="text-sm text-gray-700">Price per night: $89</p>
            )}
          </div>
          {/* Address Card */}
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
                <p>Address: Kecamatan Kuta, Bali, Indonesia</p>
                <p>City: Kecamatan Kuta</p>
                <p>Area: Captain Cook, Kecamatan Kuta</p>
                <p>County: Kecamatan Kuta</p>
                <p>State: Bali</p>
                <p>Country: Indonesia</p>
                <p>Zip: 80361</p>
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
                <p>Property Status: For sale</p>
                <p>Property ID: 37364</p>
                <p>Rooms: 1</p>
                <p>Bedrooms: 1</p>
                <p>Bathrooms: 1</p>
                <p>Check-Out Hour: 11:00 AM</p>
                <p>Check-in Hour: 2:00 PM - 2:00 AM</p>
              </div>
            )}
          </div>
          {/* Features Header */}
          <div
            className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100"
            onClick={toggleFeatures}
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
            {/* Features Content */}
            {isOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 text-sm">
                {/* Bathroom */}
                <div>
                  <h4 className="font-medium text-[#e0b41c] mb-2">Bathroom</h4>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Bathtub
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Cleaning products
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Hair
                    dryer
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Outdoor
                    shower
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Shower
                    gel
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Bidet
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Conditioner
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Hot
                    water
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Shampoo
                  </p>
                </div>

                {/* Bed and Bath */}
                <div>
                  <h4 className="font-medium text-[#e0b41c] mb-2">
                    Bed and bath
                  </h4>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Hangers
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Bed
                    linens
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Drying
                    rack for clothing
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Extra
                    pillows and blankets
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Iron
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Safe
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Clothing storage: closet and wardrobe
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Essentials
                  </p>
                  <p>
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Room-darkening shades
                  </p>
                </div>

                {/* Entertainment */}
                <div>
                  <h4 className="font-medium text-[#e0b41c] mb-2">
                    Entertainment
                  </h4>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Bluetooth sound system
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Exercise equipment: yoga mat
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> TV
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Books
                    and reading material
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Movie
                    theater
                  </p>
                </div>

                {/* Heating and Cooling */}
                <div>
                  <h4 className="font-medium text-[#e0b41c] mb-2">
                    Heating and cooling
                  </h4>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Air
                    conditioning
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Lock on
                    bedroom door
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Ceiling
                    fan
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Portable fans
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-medium text-[#e0b41c] mb-2">Services</h4>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i>{" "}
                    Breakfast
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Host
                    greets you
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Smoking
                    allowed
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check  mr-2"></i> Cleaning available
                    during stay
                  </p>
                  <p>
                    {" "}
                    <FaCheck className="inline mr-2 text-[#e0b41c]" />
                    <i className="fas fa-check text-[#e0b41c] mr-2"></i> Luggage
                    dropoff allowed
                  </p>
                </div>
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
                <p>✔ Smoking Allowed</p>
                <p>✖ Party Allowed</p>
                <p>✔ Children Allowed</p>
                <p>Cancellation Policy: 2:00 PM (Check-in): No refund</p>
                <p>
                  Other Rules: If you come at night between 9 PM till 6 AM we
                  can arrange that someone checks you in for an additional fee
                  of 15 USD.
                </p>
              </div>
            )}
          </div>
          {/* Availaibilty card */}
          <div className="bg-white shadow-lg p-4 mb-7 mt-12 border-2 border-gray-100   ml-0">
            <div className="flex items-center space-x-1 text-[#e0b41c] text-1xl font-semibold mb-4">
              <i className="fas fa-file-alt"></i>
              <span>Availability</span>
            </div>
            <Calendar />
          </div>
        </div>
        {/* Right Section */}

        <div className={`md:w-1/4 ${isSticky ? "sticky top-0" : "relative"}`}>
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-semibold text-white mb-4 bg-[#e0b41c] p-3">
              $89 per night
            </h3>
            {/* Booking Section */}
            <div className="space-y-5">
              {" "}
              {/* Adjusted space between components */}
              <h4 className="font-medium text-gray-700 mb-2">Book Now</h4>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="inline mr-2 text-[#e0b41c]" />
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full border rounded-md p-3 text-sm" // Adjusted padding
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="inline mr-2 text-[#e0b41c]" />
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full border rounded-md p-3 text-sm" // Adjusted padding
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
                  max="2"
                  className="w-full border rounded-md p-3 text-sm" // Adjusted padding
                  placeholder="Number of guests"
                />
              </div>
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-center mb-4 mt-4">
              <input type="checkbox" className="mr-2" />
              <p className="text-xs text-gray-500">
                I agree to the terms and conditions.
              </p>
            </div>

            {/* Instant Booking */}
            <button className="bg-[#e0b41c] text-white w-full py-3 rounded-md flex items-center justify-center text-lg">
              {" "}
              {/* Adjusted padding */}
              <FaBolt className="inline text-green-400 mr-2" />
              Instant Booking
            </button>

            {/* Favorites and Contact Owner */}
            <div className="flex space-x-2 mt-8 mb-9">
              <button className="border border-gray-400 text-gray-400 bg-white w-1/2 py-3 rounded-md">
                Add to Favorites
              </button>
              <button className="border border-gray-300 text-white bg-gray-400 w-1/2 py-2 rounded-md">
                Contact Owner
              </button>
            </div>

            {/* Advanced Search */}
            <div className="mt-6 p-3 ">
              {" "}
              {/* Adjusted padding */}
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Advanced Search
              </h4>
              <input
                type="text"
                placeholder=" Where do you want to go?"
                className="w-full border rounded-md p-3 text-sm mb-4" // Adjusted padding
              />
              <div className="space-y-3">
                {" "}
                {/* Increased spacing */}
                <div>
                  <label className="block text-1xl text-gray-600">
                    <FaCalendarAlt className="inline mr-2 mb-3 text-[#e0b41c]" />
                    Check-In
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-md p-3 text-sm" // Adjusted padding
                  />
                </div>
                <div>
                  <label className="block text-1xl text-gray-600 mb-3">
                    <FaCalendarAlt className="inline mr-2 text-[#e0b41c]" />
                    Check-Out
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-md p-3 text-sm" // Adjusted padding
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
                    className="w-full border rounded-md p-3 text-sm" // Adjusted padding
                    placeholder="Number of guests"
                  />
                </div>
              </div>
              <button className="bg-[#e0b41c] text-white w-full py-3 rounded-md mt-4 text-lg">
                {" "}
                {/* Adjusted padding and font size */}
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
      {/* Bottom Image for smaller screens */}
      <div className="block lg:hidden w-full h-full mt-20 place-items-center">
        <a href="/home-page" target="_blank" rel="noopener noreferrer">
          <img
            src={ownerimagesmall}
            alt="Bottom Decorative"
            className="w-full object-cover"
          />
        </a>
      </div>

      <div className="mt-16">
        {/* Similar Listings Heading */}
        <h2 className="text-[#e0b41c] font-semibold text-lg mb-6 px-24">
          Similar Listings
        </h2>

        {/* Property Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-24">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(routes[index])} // Navigate to the respective route
            >
              {/* Image Slider */}
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
                    e.stopPropagation(); // Prevent navigation when toggling images
                    toggleImage(index);
                  }}
                >
                  <FaChevronLeft className="text-black" />
                </button>
                <button
                  className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation when toggling images
                    toggleImage(index);
                  }}
                >
                  <FaChevronRight className="text-black" />
                </button>
              </div>

              {/* Property Details */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Property1;
