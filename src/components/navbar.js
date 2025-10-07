import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";

const Navbar = () => {
  const { content, loading } = useContent("navbar.json");
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) return null;
  if (!content) return null;

  return (
    <div>
      {/* Large Screens Navbar */}
      <nav className="hidden lg:block fixed w-full h-16 top-0 left-0 z-50 bg-[#e0dcd4]">
        <div className="flex justify-between items-center px-4 py-2 lg:px-8">
          <Link to="/" className="flex-shrink-0">
            <img
              src={content.logo}
              alt="Website Logo"
              className="h-20 w-auto ml-6 mb-6"
            />
          </Link>
          <div className="flex space-x-4 mb-10 text-1xl">
            {content.links.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="text-black font-small hover:text-white px-2 py-1 text-sm rounded-[4px]"
              >
                {link.text}
              </Link>
            ))}
          </div>
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
              src={content.logo}
              alt="Website Logo"
              className="h-16 w-auto ml-5 mb-4"
            />
          </Link>
          <div className="w-8"></div>
        </div>

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
              {content.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm hover:text-[#dd9933]"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
