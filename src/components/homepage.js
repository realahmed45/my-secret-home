import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure React Router's Link is imported

import logo from "../images/logo.png"; // Import logo image

const MainHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Large Screens Navbar */}
      <nav className="hidden lg:block fixed w-full h-16 top-0 left-0 z-50 bg-transparent">
        <div className="flex justify-between items-center px-4 py-2 lg:px-8">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Website Logo"
              className="h-20 w-auto ml-6 mb-6"
            />
          </Link>
          <div className="flex space-x-4 mb-10 text-1xl">
            {[
              { to: "/home-page", text: "Home" },
              { to: "/faqs", text: "About" },
              { to: "/rooms", text: "Rooms" },
              { to: "/services", text: "Services" },
              { to: "/travel", text: "Packages" },
              { to: "/gallery", text: "Gallery" },
              { to: "/travel", text: "Travel" },
            ].map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className="text-[#dd9933] font-small hover:text-white hover:border-white px-2 py-1 text-sm rounded-[4px] border border-transparent"
              >
                {text}
              </Link>
            ))}
          </div>
          {/* Empty div to balance the logo and center the navigation */}
          <div className="flex-shrink-0 w-32"></div>
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
          <div className="w-8"></div> {/* Spacer to maintain layout balance */}
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
                { to: "/home-page", text: "Home" },
                { to: "/faqs", text: "About" },
                { to: "/rooms", text: "Rooms" },
                { to: "/services", text: "Services" },
                { to: "/travel", text: "Packages" },
                { to: "/gallery", text: "Gallery" },
                { to: "/travel", text: "Travel" },
              ].map(({ to, text }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm hover:text-[#dd9933]"
                >
                  {text}
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
            Your browser does not support the video tag.
          </video>
          {/* Black Cover */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white h-full flex flex-col justify-center items-center ">
          <h1 className="text-5xl lg:text-5xl  mb-4 sm: text-3xl mb-5">
            Welcome to Our Hotel
          </h1>
          <p className="text-xl lg:text-1xl sm:mb-4">
            Experience luxury and comfort like never before
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
