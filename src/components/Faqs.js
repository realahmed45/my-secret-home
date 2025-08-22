import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import aboutImage from "../images/faq-banner.png";
import TestimonialsSection from "./testimonials";

// Import images here
import LivingRoomImage from "../videos/living.png";
import BedroomImage from "../videos/bedroom.png";
import KitchenImage from "../videos/kitchen.png";
import BathroomImage from "../videos/bath.png";
import PatioImage from "../videos/patio.png";
import SharedPoolImage from "../videos/shared-pool.png";

const houseSections = [
  {
    id: 1,
    title: "Living room",
    description: `
   In secret Bali home, the living room exudes tranquility and style. It features rich wooden beams, stone floors, and large windows that offer views of lush gardens. Furnished with a plush, neutral sofa and handcrafted Balinese tables, the space blends traditional and modern elements. Light, flowing drapes filter sunlight, and local art and pottery add character. Indoor plants and an earthy color palette enhance the serene atmosphere. A ceiling fan provides a gentle breeze, completing this peaceful retreat.`,
    image: LivingRoomImage,
  },
  {
    id: 2,
    title: "Bedroom",
    description: `
      In secret Bali home, the bedroom offers a luxurious retreat with two king-sized beds, each draped in soft, high-quality linens for ultimate comfort. The room features air conditioning and a ceiling fan, ensuring a cool and restful environment. Ample clothing storage is provided, along with essentials like extra pillows and blankets for added coziness. Room-darkening shades guarantee a peaceful night’s sleep, while a safe and hangers cater to practical needs. For entertainment, a flat-screen TV is included, blending modern convenience with a serene, well-appointed space.`,
    image: BedroomImage,
  },
  {
    id: 3,
    title: "Kitchen",
    description: `
      In secret Bali home, the kitchen is a blend of modern functionality and island charm. It features sleek, natural stone countertops and rich wooden cabinets with traditional Balinese carvings. High-end appliances are seamlessly integrated into the design, ensuring efficiency while maintaining a cohesive look. A central island provides both extra prep space and a casual dining area. Large windows allow natural light to flood in, making the space bright and inviting. Decorative touches like handwoven baskets and local ceramics add warmth and character, creating a welcoming culinary haven.`,
    image: KitchenImage,
  },
  {
    id: 4,
    title: "Full Bathroom",
    description: `
     In the full bathroom of secret Bali home, you’ll find a blend of luxury and practicality. The space includes a relaxing bathtub for unwinding, along with a separate shower equipped with shampoo, conditioner, and shower gel. Air conditioning ensures a comfortable temperature, while a bidet adds a touch of modern convenience. Essential amenities like body soap, a hair dryer, and cleaning products are provided, and a consistent supply of hot water enhances your comfort`,
    image: BathroomImage,
  },
  {
    id: 5,
    title: "Patio",
    description: `
    The patio of  secret Bali home is a serene outdoor oasis. It features comfortable lounge furniture and a dining area, perfect for enjoying meals or relaxing while taking in the lush garden views. Tropical plants and subtle lighting create a cozy, inviting atmosphere. A thatched roof or pergola provides shade, and a nearby water feature adds a soothing soundscape. The space is designed for both relaxation and entertaining, embodying the tranquility and charm of Bali.`,
    image: PatioImage,
  },
  {
    id: 6,
    title: "Shared Pool",
    description: `
      The shared pool at secret Bali home is a tranquil retreat, nestled within a lush tropical setting. It features crystal-clear water and is surrounded by sun loungers for ultimate relaxation. Elegant landscaping with vibrant greenery and blooming flowers enhances the serene atmosphere. A shaded pavilion offers a cool spot to unwind, while the pool’s gentle design integrates seamlessly with the natural beauty of Bali, creating a perfect escape for both leisurely swims and peaceful lounging.`,
    image: SharedPoolImage,
  },
];

const FAQ_DATA = [
  {
    question: "What is the check-in and check-out time?",
    answer:
      "Check-in is from 3:00 PM and check-out is by 11:00 AM. If you need a different time, please contact us in advance, and we will do our best to accommodate your request.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes, we provide airport transfers. Please inform us of your flight details at least 48 hours before your arrival so we can arrange transportation for you.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is included in most of our packages. Please check the specific package details for more information.",
  },
  {
    question: "Are pets allowed in the villa?",
    answer:
      "We love animals, but we do not allow pets in the villa to ensure comfort and cleanliness for all our guests.",
  },
  {
    question: "What amenities are included in the villa?",
    answer:
      "Our villa includes air-conditioned bedrooms, a private pool, a fully equipped kitchen, Wi-Fi, and access to spa services and yoga classes.",
  },
  {
    question: "Do you provide Wi-Fi access?",
    answer: "Yes, free Wi-Fi is available throughout the villa.",
  },
  {
    question: "Can I cancel or modify my reservation?",
    answer:
      "Yes, we offer flexible cancellation policies. Please refer to our booking terms or contact us directly for more information on modifications or cancellations.",
  },
  {
    question:
      "Are there any additional charges for using the spa or other services?",
    answer:
      "Spa services and certain activities may incur additional charges. Please check the details of your package or contact us for more information.",
  },
  {
    question: "What is your policy on smoking?",
    answer:
      "Smoking is not permitted inside the villa. We provide designated outdoor areas where smoking is allowed.",
  },
  {
    question: "What safety measures are in place at the villa?",
    answer:
      "We prioritize your safety with 24/7 security, daily housekeeping, and adherence to health and safety guidelines. If you have any specific concerns, please let us know.",
  },
  {
    question: "Are there any nearby attractions or activities?",
    answer:
      "Yes, our villa is close to temples, waterfalls, beaches, and markets. We also offer guided tours and activities. Please ask us for recommendations.",
  },
];

const Faqs = () => {
  const [activeSection, setActiveSection] = useState(1);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col  mt-20  mb-10 md:flex-row items-center justify-center px-4 py-8 md:px-8 lg:px-16 flex-grow">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={aboutImage}
            alt="About My Secret Home Bali"
            className="rounded-lg shadow-lg w-full md:w-3/4"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4 mt-6 md:mt-0 px-4 md:px-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#dc9c34]">
            About My Secret Home Bali
          </h2>
          <p className="text-gray-700 text-base leading-loose">
            Welcome to our villa in Bali, a serene and spacious retreat
            surrounded by nature. Our villa is located in a quiet and peaceful
            area, yet only a short drive away from the lively and vibrant
            attractions of Bali. Whether you are looking for a relaxing getaway
            or an adventurous holiday, our villa offers the perfect base to
            explore the island’s beauty and culture. You can visit the nearby
            temples, waterfalls, beaches, or markets, or join one of our guided
            tours or activities.
          </p>
          <button className="bg-[#d19a1a] text-white font-semibold px-6 py-3 shadow hover:bg-[#dc9c34] transition">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6  mb-10 px-4 md:px-40">
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
      <section className="mt-6 mb-20 px-4 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#dc9c34] mb-4">
            {houseSections[activeSection - 1].title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-4 leading-loose">
            {houseSections[activeSection - 1].description}
          </p>
          <button className="bg-[#dc9c34] text-white py-2 px-4 md:px-6 shadow-md hover:bg-[#d19a1a]">
            Book Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={houseSections[activeSection - 1].image}
            alt={houseSections[activeSection - 1].title}
            className="w-full max-w-[550px] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <div className="mt-6 px-4 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#d19a1a] mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Get quick answers to common questions about booking, amenities, and
          more. For additional inquiries, our team is here to assist you.
        </p>
        <div className="space-y-4 mb-20">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full md:w-4/5 lg:w-[1000px] mx-auto"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium text-gray-700 bg-white hover:bg-gray-100"
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Faqs;
