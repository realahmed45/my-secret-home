import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHome from "./components/homepage";
import Homepage from "./components/secondhomepage";
import Property1 from "./components/property1";
import Property2 from "./components/property2";
import Property3 from "./components/property3";
import Property4 from "./components/property4";
import Rooms from "./components/Rooms";
import Faqs from "./components/Faqs";
import Gallery from "./components/Gallery";
import TravelTourCards from "./components/Travel";
import TravelDescription from "./components/traveldescription";
import Services from "./components/services";
import Service1 from "./components/service1";
import Service2 from "./components/service2";
import Service3 from "./components/service3";
import Service4 from "./components/service4";
import Service5 from "./components/service5";
import Service6 from "./components/service6";
import Service7 from "./components/service7";
import Service8 from "./components/service8";
import Property5 from "./components/property5";
import Property6 from "./components/property6";
import Property7 from "./components/property7";

const App = () => {
  useEffect(() => {
    // Load the GTranslate script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    // Initialize the GTranslate settings
    window.gtranslateSettings = {
      default_language: "en",
      detect_browser_language: true,
      languages: ["en", "fr", "ko", "hi", "zh-TW", "id", "ja", "ar"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
      switcher_vertical_position: "top",
      float_switcher_open_direction: "bottom",
      flag_style: "3d",
      alt_flags: { en: "usa" },
    };

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div
        className="gtranslate_wrapper"
        style={{ position: "fixed", top: 0, right: 0, zIndex: 1000 }}
      ></div>

      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home-page" element={<Homepage />} />
        <Route path="/property-1" element={<Property1 />} />
        <Route path="/property-2" element={<Property2 />} />
        <Route path="/property-3" element={<Property3 />} />
        <Route path="/property-4" element={<Property4 />} />
        <Route path="/property-5" element={<Property5 />} />
        <Route path="/property-6" element={<Property6 />} />
        <Route path="/villa" element={<Property7 />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/travel" element={<TravelTourCards />} />
        <Route path="/travel-description" element={<TravelDescription />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-1" element={<Service1 />} />
        <Route path="/service-2" element={<Service2 />} />
        <Route path="/service-3" element={<Service3 />} />
        <Route path="/service-4" element={<Service4 />} />
        <Route path="/service-5" element={<Service5 />} />
        <Route path="/service-6" element={<Service6 />} />
        <Route path="/service-7" element={<Service7 />} />
        <Route path="/service-8" element={<Service8 />} />
      </Routes>
    </Router>
  );
};

export default App;
