import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const renderCalendar = (monthOffset) => {
    const month = new Date(currentMonth);
    month.setMonth(currentMonth.getMonth() + monthOffset);

    const monthName = month.toLocaleString("default", { month: "long" });
    const year = month.getFullYear();

    // Generate days
    const startOfMonth = new Date(year, month.getMonth(), 1);
    const endOfMonth = new Date(year, month.getMonth() + 1, 0);
    const daysInMonth = Array.from(
      { length: endOfMonth.getDate() },
      (_, i) => i + 1
    );

    return (
      <div className="w-full md:w-1/2">
        <h3 className="text-center font-semibold">
          {monthName} {year}
        </h3>
        <div className="grid grid-cols-7 gap-2 mt-4">
          {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
            <div
              key={day}
              className="text-sm text-gray-500 font-medium text-center"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: startOfMonth.getDay() }, (_, i) => (
            <div key={i}></div>
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`text-center py-1 rounded-md ${
                day === new Date().getDate() &&
                month.getMonth() === new Date().getMonth()
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-10 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center px-4 space-y-4 md:space-y-0 md:space-x-4">
        <button
          className="text-[#e09c34] p-2 rounded-full hover:bg-gray-200"
          onClick={handlePreviousMonth}
        >
          <FaChevronLeft size={20} />
        </button>
        <div className="flex flex-col md:flex-row w-full max-w-3xl justify-between space-y-6 md:space-y-0 md:space-x-4">
          {renderCalendar(0)}
          {renderCalendar(1)}
        </div>
        <button
          className="text-[#e09c34] p-2 rounded-full hover:bg-gray-200"
          onClick={handleNextMonth}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <div className="mt-6 text-center">
        <div className="flex justify-center flex-wrap space-x-4">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-gray-100 mr-2"></div>
            <span className="text-sm">Past</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-black mr-2"></div>
            <span className="text-sm">Today</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-[#e09c34]  mr-2"></div>
            <span className="text-sm">Booked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
