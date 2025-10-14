// =============================================
// SERVICE4.JS - COCONUT IN INDONESIA
// =============================================
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Service4 = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch("/content/service-4.json")
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

              {section.type === "nested-list" && (
                <ol className="list-decimal ml-5 space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.title}:</strong>
                      {item.description && <span> {item.description}</span>}
                      {item.subitems && (
                        <ul className="list-disc ml-5 mt-2">
                          {item.subitems.map((subitem, subIdx) => (
                            <li key={subIdx}>{subitem}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              )}

              {section.type === "paragraph" && <p>{section.content}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service4;
