import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./footer";
import Calendar from "./calender2";

// Image URLs
const images1 = [
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-9-2.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-95.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-56.png",
];

const images = [
  "https://mysecrethomebali.com/wp-content/uploads/2023/11/Rectangle-1214-600x495.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1194-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1195-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1196-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/Rectangle-1197-600x512.png",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/9I-768x575.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/8H-768x575.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/17Q-768x580.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/11-K-768x575.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2023/12/16P-768x573.jpg",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-16-2-400x314.png",
  "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-6-2-400x314.png",
];

const Rooms = () => {
  const [showBookNow, setShowBookNow] = useState(true); // State for showing/hiding Book Now section
  const [activeSection, setActiveSection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Property link mapping function
  const getPropertyLink = (roomNumber) => {
    const linkMap = {
      1: "/property-3", // Room 1 -> /property3
      2: "/property-4", // Room 2 -> /property4
      3: "/property-1", // Room 3 -> /property1
      4: "/property-2", // Room 4 -> /property2
    };
    return linkMap[roomNumber] || `/property-${roomNumber}`;
  };

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: [
        "Check-in: 2 PM – 8 PM. Late arrivals after 8 PM may incur a small fee.",
        "Check-out: By 11 AM.",
      ],
    },
    {
      question: "Is breakfast included?",
      answer: ["Yes, we offer unlimited breakfast options daily."],
    },
    {
      question: "Can I bring my pet?",
      answer: ["Unfortunately, pets are not allowed on the property."],
    },
    {
      question: "How far is the beach from the villa?",
      answer: [
        "The beach is within a short walking distance from the property.",
      ],
    },
    {
      question: "Is parking available?",
      answer: [
        "Yes, we provide free parking for scooters on-site, and cars can park nearby.",
      ],
    },
    {
      question: "What activities are nearby?",
      answer: [
        "There are plenty of restaurants, bars, and local attractions within walking distance, including surfing and horse riding.",
      ],
    },
  ];

  const houseSections = [
    {
      id: 1,
      title: "Bedroom 1",
      heading: "Room 1 (India)",
      description: `
        Immerse yourself in the vibrant charm of India within Room 1. This space blends traditional Indian elegance with modern comfort, featuring rich fabrics, intricate art, and a warm color palette. Soft, ambient lighting and handcrafted furniture create a serene and exotic retreat, offering a unique escape with a touch of Indian heritage in your Bali home.
      `,
      tickPoints: [
        "Spacious Loft Design",
        "Dedicated Workspace",
        "Perfect for a family of 4",
        "Private Attached Bathroom",
      ],
      image:
        "https://mysecrethomebali.com/wp-content/uploads/2024/09/download-2024-09-14T230413.758.png",
    },
    {
      id: 2,
      title: "Bedroom 2",
      heading: "Room 2 (Nepal)",
      description: `
        Experience the captivating essence of Nepal in Room 2. This space seamlessly combines traditional Nepali elegance with contemporary comfort, showcasing vibrant fabrics, detailed artwork, and a soothing color scheme. Soft ambient lighting and handcrafted furnishings create a tranquil and exotic haven, offering a distinctive escape infused with Nepali heritage right in your Bali home.
      `,
      tickPoints: [
        "Spacious Loft Design",
        "Dedicated Workspace",
        "Perfect for a family of 4",
        "Private Attached Bathroom",
      ],
      image:
        "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-3-1.png",
    },
    {
      id: 3,
      title: "Bedroom 3",
      heading: "Room 3 (Spa)",
      description: `
        Discover the serene beauty of our Spa Room 3. This space harmoniously blends soothing spa aesthetics with modern comfort, featuring calming colors, luxurious textures, and tranquil artwork. Gentle ambient lighting and thoughtfully designed furnishings create a peaceful oasis, providing a unique retreat infused with a sense of relaxation and rejuvenation in your Bali home.
      `,
      tickPoints: [
        "Spacious Loft Design",
        "Dedicated Workspace",
        "Perfect for a family of 4",
        "Private Attached Bathroom",
      ],
      image:
        "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-16-1.png",
    },
    {
      id: 4,
      title: "Bedroom 4",
      heading: "Room 4 (Easy)",
      description: `
        Unwind in the inviting comfort of Room 4. This space perfectly balances relaxed aesthetics with modern convenience, featuring soft colors, cozy textures, and calming decor. Soft ambient lighting and carefully selected furnishings create a soothing retreat, offering a delightful escape that promotes relaxation and ease in your Bali home.
      `,
      tickPoints: [
        "Spacious Loft Design",
        "Dedicated Workspace",
        "Perfect for a family of 4",
        "Private Attached Bathroom",
      ],
      image:
        "https://mysecrethomebali.com/wp-content/uploads/2024/09/Untitled-design-1024x672.png",
    },
    {
      id: 5,
      title: "Bedroom 5",
      heading: "Room 5 (india)",
      description: `
        Relax in the welcoming comfort of our entire villa. This space seamlessly combines a laid-back aesthetic with modern amenities, featuring soothing colors, plush textures, and tranquil decor. Gentle ambient lighting and thoughtfully chosen furnishings create a serene retreat, providing a wonderful escape that encourages relaxation and harmony in your Bali getaway.
      `,
      tickPoints: [
        "Spacious Loft Design",
        "Dedicated Workspace",
        "Perfect for a family of 4",
        "Private Attached Bathroom",
      ],
      image:
        "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-36-1-1024x768.png",
    },
    {
      id: 6,
      title: "Bedroom 6",
      heading: "Room 6 (india)",
      description: `
        Relax in the welcoming comfort of our entire villa. This space seamlessly combines a laid-back aesthetic with modern amenities, featuring soothing colors, plush textures, and tranquil decor. Gentle ambient lighting and thoughtfully chosen furnishings create a serene retreat, providing a wonderful escape that encourages relaxation and harmony in your Bali getaway.
      `,
      tickPoints: [
        "Spacious Loft Design",
        "Dedicated Workspace",
        "Perfect for a family of 4",
        "Private Attached Bathroom",
      ],
      image:
        "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-36-1-1024x768.png",
    },
    {
      id: 7,
      title: "Full Villa",
      heading: "Full Villa",
      description: `
        Relax in the welcoming comfort of our entire villa. This space seamlessly combines a laid-back aesthetic with modern amenities, featuring soothing colors, plush textures, and tranquil decor. Gentle ambient lighting and thoughtfully chosen furnishings create a serene retreat, providing a wonderful escape that encourages relaxation and harmony in your Bali getaway.
      `,
      tickPoints: [
        "Spacious Loft Design",
        "Dedicated Workspace",
        "Perfect for a family of 4",
        "Private Attached Bathroom",
      ],
      image:
        "https://mysecrethomebali.com/wp-content/uploads/2024/08/download-36-1-1024x768.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Intro Paragraph */}
      <section className="mt-8 px-4 md:px-12 lg:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#dc9c34] mb-7  mt-20">
          Uncover Your Ideal Escape at Our 4-Bedroom Bali Retreat
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
          Indulge in unmatched comfort and stunning scenery. Our spacious rooms,
          modern amenities, and tranquil atmosphere make our Bali home the
          perfect retreat for relaxation and unforgettable experiences.
        </p>
      </section>

      {/* Tabs */}
      <div className="mt-6 mb-10 px-4 md:px-40">
        <div className="flex flex-col md:flex-row justify-between overflow-auto text-center text-[#e0b41c] border-t border-b border-[#e0e0e0] py-2">
          {houseSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`text-lg font-normal py-2 px-4 rounded-md ${
                activeSection === section.id
                  ? "text-black bg-gray-100"
                  : "hover:bg-gray-50 text-[#e0b41c]"
              } ${
                activeSection === section.id && "bg-gray-100 md:bg-transparent"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Content */}
      <section className="mt-6 mb-20 px-4 md:px-12 lg:px-40 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#dc9c34] mb-4">
            {houseSections[activeSection - 1].heading}{" "}
            <Link
              to={getPropertyLink(activeSection)}
              className="text-black text-1xl  ml-6 font-normal mb-20"
            >
              For more info click here
            </Link>
          </h2>

          <p className="text-sm md:text-base text-gray-600 mb-4 leading-loose">
            {houseSections[activeSection - 1].description}
          </p>
          <ul className="list-none text-sm md:text-base text-gray-700 mb-4">
            {houseSections[activeSection - 1].tickPoints.map((point, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔</span>
                {point}
              </li>
            ))}
          </ul>
          {activeSection <= 4 && (
            <div className="flex flex-col">
              <button className="bg-[#dc9c34] text-white py-2 px-4 md:px-6 shadow-md hover:bg-[#d19a1a]">
                Book Now
              </button>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={houseSections[activeSection - 1].image}
            alt={houseSections[activeSection - 1].title}
            className="w-full max-w-[550px] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Image Gallery Section */}
      <div className="lg:mt-4 mb-20 px-4 md:px-20 lg:mr-48 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity duration-300 ml-14"
                style={{ height: "150px", objectFit: "cover", width: "100%" }}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3 text-right p-0">
            <h2 className="text-3xl ml-20 font-bold text-[#dc9c34] text-center">
              Your Ideal Bali Retreat Awaits at Our Serene Beach Home
            </h2>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-2xl font-bold"
            onClick={closeModal}
          >
            ✖
          </button>
          <div className="flex items-center">
            <button className="text-white text-2xl mr-4" onClick={prevImage}>
              ❮
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="rounded-lg max-h-[80vh] max-w-[90vw]"
            />
            <button className="text-white text-2xl ml-4" onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}
      <Calendar />

      <section className="py-40">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#dc9c34] text-center mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Get answers to your burning questions and make the most of your stay
            at My Secret Bali Homes!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-10 w-[80%] hover:shadow-xl transition-shadow duration-300 "
              >
                <h3 className="text-1xl font-semibold text-[#dc9c34] mb-4">
                  {faq.question}
                </h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm leading-relaxed">
                  {faq.answer.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Rooms;
