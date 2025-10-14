// =============================================
// SERVICE8.JS - PLAYGROUND CASTLES
// =============================================
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Service8 = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch("/content/service-8.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load service data");
        return res.json();
      })
      .then((data) => setServiceData(data))
      .catch((err) => console.error("Error loading service data:", err));
  }, []);

  if (!serviceData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-32 mb-5">
          {serviceData.title}
        </h1>
        <img
          src={serviceData.mainImage}
          alt={serviceData.title}
          className="w-[90%] h-[80%]"
        />
        <div className="text-lg mt-10">
          <p className="mb-5">{serviceData.introduction}</p>

          {serviceData.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
                {section.heading}
              </h2>

              {section.type === "paragraph" && <p>{section.content}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service8;
