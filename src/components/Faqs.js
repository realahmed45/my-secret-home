import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import TestimonialsSection from "./testimonials";

const Faqs = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [houseSections, setHouseSections] = useState([]);
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    // Load about data
    fetch("/content/about.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error loading about data:", error));

    // Load house sections
    fetch("/content/house-sections.json")
      .then((response) => response.json())
      .then((data) => setHouseSections(data.sections))
      .catch((error) => console.error("Error loading house sections:", error));

    // Load FAQs
    fetch("/content/faqs.json")
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error("Error loading FAQ data:", error));
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!aboutData || !houseSections.length || !faqData) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col mt-20 mb-10 md:flex-row items-center justify-center px-4 py-8 md:px-8 lg:px-16 flex-grow">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={aboutData.bannerImage}
            alt={aboutData.mainHeading}
            className="rounded-lg shadow-lg w-full md:w-3/4"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4 mt-6 md:mt-0 px-4 md:px-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#dc9c34]">
            {aboutData.mainHeading}
          </h2>
          <p className="text-gray-700 text-base leading-loose">
            {aboutData.description}
          </p>
          <button className="bg-[#d19a1a] text-white font-semibold px-6 py-3 shadow hover:bg-[#dc9c34] transition">
            {aboutData.buttonText}
          </button>
        </div>
      </div>

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
      <section className="mt-6 mb-20 px-4 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#dc9c34] mb-4">
            {houseSections[activeSection - 1].heading}
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

      {/* FAQs Section */}
      <div className="mt-6 px-4 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#d19a1a] mb-4 text-center">
          {faqData.heading}
        </h2>
        <p className="text-center text-gray-600 mb-6">{faqData.description}</p>
        <div className="space-y-4 mb-20">
          {faqData.faqItems.map((faq, index) => (
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
      <Footer />
    </div>
  );
};

export default Faqs;
