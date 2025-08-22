import React, { useEffect, useState } from "react";

const StickySection = () => {
  const [sticky, setSticky] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0 });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = window.innerHeight * 0.6;
    setSticky(scrollPosition < triggerPosition);
  };

  const adjustGuests = (type, adjustment) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + adjustment),
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-end">
      <div className={`w-full lg:w-1/4 px-4 lg:px-8`}>
        <div
          className={`${
            sticky ? "sticky top-6" : ""
          } bg-white border border-gray-200 shadow-md rounded-lg p-6`}
        >
          {/* Price Section */}
          <div className="text-center">
            <div className="bg-[#e0b41c] text-white text-lg font-bold py-3 px-6 rounded-lg">
              $89 per night
            </div>
          </div>

          {/* Booking Form */}
          <div className="mt-6">
            <h3 className="text-md font-semibold text-[#e0b41c]">Book Now</h3>
            <form className="space-y-4">
              <div>
                <label className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-calendar-alt mr-2"></i> Check-in
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
              </div>
              <div>
                <label className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-calendar-alt mr-2"></i> Check-Out
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
              </div>
              <div>
                <label className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-users mr-2"></i> Guests
                </label>
                <input
                  type="text"
                  placeholder="Guests"
                  readOnly
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm cursor-pointer"
                  onClick={() => setShowGuestModal(!showGuestModal)}
                />
                {showGuestModal && (
                  <div className="absolute bg-white shadow-md rounded-lg p-4 top-full mt-2 w-full z-10">
                    <div className="flex justify-between items-center text-sm mb-4">
                      <span>Adults</span>
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                          onClick={() => adjustGuests("adults", -1)}
                        >
                          -
                        </button>
                        <span>{guests.adults}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                          onClick={() => adjustGuests("adults", 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm mb-4">
                      <span>Children</span>
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                          onClick={() => adjustGuests("children", -1)}
                        >
                          -
                        </button>
                        <span>{guests.children}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                          onClick={() => adjustGuests("children", 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Infants</span>
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                          onClick={() => adjustGuests("infants", -1)}
                        >
                          -
                        </button>
                        <span>{guests.infants}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                          onClick={() => adjustGuests("infants", 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="mt-4 text-sm text-gray-500 hover:text-black"
                      onClick={() => setShowGuestModal(false)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="w-full bg-[#e0b41c] text-white text-sm font-semibold py-2 rounded-md"
              >
                Instant Booking
              </button>
            </form>
          </div>

          {/* Additional Buttons */}
          <div className="mt-6 flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-md">
              Add to Favorites
            </button>
            <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-md">
              Contact Owner
            </button>
          </div>

          {/* Share Options */}
          <div className="mt-6 text-center">
            <h4 className="text-sm font-semibold text-gray-600">Share</h4>
            <div className="flex justify-center space-x-4 mt-2">
              <i className="fab fa-whatsapp text-[#e0b41c] text-lg"></i>
              <i className="fab fa-facebook text-[#e0b41c] text-lg"></i>
              <i className="fas fa-envelope text-[#e0b41c] text-lg"></i>
              <i className="fab fa-pinterest text-[#e0b41c] text-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySection;
