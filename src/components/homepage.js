import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure React Router's Link is imported

import logo from "../images/logo.png"; // Import logo image
import UKFlag from "../images/flags/uk.png"; // Adjust all flag imports based on your file paths
import ArabicFlag from "../images/flags/arabic.png";
import ChineseFlag from "../images/flags/chinese.png";
import FrenchFlag from "../images/flags/france.png";
import HindiFlag from "../images/flags/hindi.png";
import IndonesianFlag from "../images/flags/indonesia.png";
import JapaneseFlag from "../images/flags/japanese.png";
import KoreanFlag from "../images/flags/korean.png";
import { useTranslation } from "react-i18next";

const MainHome = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: UKFlag },
    { code: "ar", name: "Arabic", flag: ArabicFlag },
    { code: "zh", name: "Chinese", flag: ChineseFlag },
    { code: "fr", name: "French", flag: FrenchFlag },
    { code: "hi", name: "Hindi", flag: HindiFlag },
    { code: "id", name: "Indonesian", flag: IndonesianFlag },
    { code: "ja", name: "Japanese", flag: JapaneseFlag },
    { code: "ko", name: "Korean", flag: KoreanFlag },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === i18n.language) || languages[0]
    );
  };

  return (
    <div>
      {/* Large Screens Navbar */}
      <nav className="hidden lg:block fixed w-full h-16 top-0 left-0 z-50 bg-transparent">
        <div className="flex justify-between items-center px-4 py-2 lg:px-8">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Website Logo"
              className="h-20 w-auto sm: ml-6 mb-6"
            />
          </Link>
          <div className="flex space-x-4 mb-10">
            {[
              { to: "/home-page", textKey: "navbar.homepage" },
              { to: "/faqs", textKey: "navbar.about" },
              { to: "/rooms", textKey: "navbar.rooms" },
              { to: "/services", textKey: "navbar.services" },
              { to: "/travel", textKey: "navbar.packages" },
              { to: "/gallery", textKey: "navbar.gallery" },
              { to: "/travel", textKey: "navbar.travel" },
            ].map(({ to, textKey }) => (
              <Link
                key={to}
                to={to}
                className="text-[#dd9933] font-small hover:text-white hover:border hover:border-white px-2 py-1 text-sm rounded-[4px]"
              >
                {t(textKey)}
              </Link>
            ))}
          </div>
          <div id="gt_float_wrapper" className="relative z-[9999] ml-10">
            <div
              className="gt-selected bg-gray-100 border rounded px-2 py-1 cursor-pointer flex items-center mb-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={getCurrentLanguage().flag}
                alt={getCurrentLanguage().name}
                className="w-4 h-3 mr-2"
              />
              <span className="gt-lang-code text-sm">
                {getCurrentLanguage().name}
              </span>
              <span className="ml-2 gt_float_switcher-arrow">
                {isOpen ? "▲" : "▼"}
              </span>
            </div>

            {isOpen && (
              <div
                className="absolute top-10 right-0 bg-white shadow-md border rounded w-36"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {languages.map(({ code, name, flag }) => (
                  <div
                    key={code}
                    className={`nturl flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      i18n.language === code ? "gt-current" : ""
                    }`}
                    onClick={() => changeLanguage(code)}
                  >
                    <img src={flag} alt={code} className="w-4 h-3 mr-2" />
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Small Screens Navbar */}
      <nav className="block lg:hidden fixed w-full h-14 top-0 left-0 z-50 bg-white">
        <div className="flex justify-between items-center px-4 py-2">
          <button
            className="p-2 focus:outline-none mb-5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#dd9933]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <Link to="/" className="mx-auto">
            <img
              src={logo}
              alt="Website Logo"
              className="h-16 w-auto ml-5 mb-4"
            />
          </Link>
          <div id="gt_float_wrapper" className="relative z-[9999] mb-6">
            <div
              className="gt-selected bg-gray-100 border rounded px-2 py-1 cursor-pointer flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={getCurrentLanguage().flag}
                alt={getCurrentLanguage().name}
                className="w-4 h-3 mr-2"
              />
              <span className="gt-lang-code text-sm  ">
                {getCurrentLanguage().name}
              </span>
              <span className="ml-2 gt_float_switcher-arrow">
                {isOpen ? "▲" : "▼"}
              </span>
            </div>

            {isOpen && (
              <div
                className="absolute top-10 right-0 bg-white shadow-md border rounded w-36"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {languages.map(({ code, name, flag }) => (
                  <div
                    key={code}
                    className={`nturl flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      i18n.language === code ? "gt-current" : ""
                    }`}
                    onClick={() => changeLanguage(code)}
                  >
                    <img src={flag} alt={code} className="w-4 h-3 mr-2" />
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-[40%] h-screen bg-white text-black z-40">
            <div className="flex justify-between items-center p-4">
              <button
                className="text-[#dd9933] text-xl"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-4 mt-2 px-4 text-1xl">
              {[
                { to: "/home-page", textKey: "navbar.homepage" },
                { to: "/faqs", textKey: "navbar.about" },
                { to: "/rooms", textKey: "navbar.rooms" },
                { to: "/services", textKey: "navbar.services" },
                { to: "/travel", textKey: "navbar.packages" },
                { to: "/gallery", textKey: "navbar.gallery" },
                { to: "/travel", textKey: "navbar.travel" },
              ].map(({ to, textKey }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm hover:text-[#dd9933]"
                >
                  {t(textKey)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative h-screen">
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            preload="metadata"
          >
            <source
              src="https://mysecrethomebali.com/wp-content/uploads/2024/09/Untitled-design.mp4"
              type="video/mp4"
            />
            {t("homepage.videoFallback")} {/* Translatable fallback message */}
          </video>
          {/* Black Cover */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white h-full flex flex-col justify-center items-center ">
          <h1 className="text-5xl lg:text-5xl  mb-4 sm: text-3xl mb-5">
            {t("homepage.title")} {/* Dynamic translation for the title */}
          </h1>
          <p className="text-xl lg:text-1xl sm:mb-4">
            {t("homepage.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
