import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import featuredImage from "../images/featured-listing.png"; // Replace with the correct image path

const Footer = () => {
  return (
    <footer className="bg-[#e0dcd4] py-4 text-gray-800 mt-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-base text-[#e09c34] mb-1">
            About My Secret Home Bali
          </h3>
          <p className="text-xs leading-tight">
            Welcome to our Bali villa, a tranquil retreat nestled in nature.
            Located in a serene area yet close to Bali's vibrant attractions,
            our villa is your perfect base for relaxation or adventure. Explore
            nearby temples, waterfalls, beaches, markets, or join our guided
            tours and activities.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-base text-[#e09c34] mb-1">
            Contact
          </h3>
          <ul className="text-xs space-y-1">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-black mr-2" />
              Jl. Courtyard, Seminyak, Kec. Kuta, Kabupaten Badung, Bali,
              Indonesia
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-black mr-2" />
              +62 878-4052-5407
            </li>
            <li className="flex items-center">
              <FaFax className="text-black mr-2" />
              +62 878-4052-5407
            </li>

            <li className="flex items-center">
              <FaGlobe className="text-black mr-2" />
              My Secret Home Bali
            </li>
          </ul>

          {/* Currency Selector */}
          <div className="mt-4">
            <h3 className="font-semibold text-base text-[#e09c34] mb-1">
              Change Your Currency
            </h3>
            <select className="w-full border border-gray-300 rounded-lg p-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#e09c34]">
              <option value="$">$</option>
              <option value="€">€</option>
              <option value="£">£</option>
            </select>
          </div>
        </div>

        {/* Featured Listings */}
        <div>
          <h3 className="font-semibold text-base text-[#e09c34] mb-1 ">
            Featured Listings
          </h3>
          <div className="flex items-center space-x-2">
            <img
              src={featuredImage}
              alt="Featured Listing"
              className="w-12 h-12 rounded-md object-cover"
            />
            <div>
              <h4 className="text-[#e09c34] text-xs font-semibold">
                Beachfront, full villa
              </h4>
              <p className="text-xs text-gray-600">
                Kuta, Banda Aceh, Banda Aceh
              </p>
              <p className="text-xs text-gray-600 font-semibold">$469/night</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-4 border-t border-gray-300 pt-2 flex justify-between text-xs ml-20">
        <p className="text-left">mysecrethomebali. All Rights Reserved</p>
        <div className="flex space-x-2 mr-4">
          <a href="#" className="hover:text-[#e09c34]">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-[#e09c34]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
