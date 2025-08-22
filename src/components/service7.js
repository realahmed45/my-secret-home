import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Service7 = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-32 mb-5">
          Sandboxes in Indonesia: A Fun and Safe Play Environment
        </h1>
        <img
          src="https://mysecrethomebali.com/wp-content/uploads/2024/09/11.jpg"
          alt="Sandboxes in Indonesia"
          className="w-[90%] h-[80%]"
        />
        <div className="text-lg mt-10">
          <p className="mb-5">
            In Indonesia, sandboxes (or “kotak pasir” in Indonesian) provide
            children with a creative and enjoyable play environment. These
            versatile play areas are popular in homes, schools, and public
            spaces, offering a range of benefits for child development.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Types of Sandboxes
          </h2>
          <ul className="list-decimal ml-5 space-y-3">
            <li>
              <strong>Residential Sandboxes:</strong> Common in backyards and
              gardens, designed for home use with various shapes and sizes.
            </li>
            <li>
              <strong>School and Playground Sandboxes:</strong> Found in
              educational settings, these are equipped with safety features and
              encourage sensory play and social interaction.
            </li>
            <li>
              <strong>Public and Community Sandboxes:</strong> Located in parks
              and recreational areas, maintained for communal use and part of
              larger playground structures.
            </li>
          </ul>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Benefits of Sandboxes
          </h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>
              <strong>Sensory Development:</strong> Sandboxes enhance sensory
              skills and fine motor development through texture exploration.
            </li>
            <li>
              <strong>Creativity and Imagination:</strong> They foster
              imaginative play and problem-solving abilities.
            </li>
            <li>
              <strong>Social Skills:</strong> Sand play encourages
              collaboration, sharing, and interaction among children.
            </li>
            <li>
              <strong>Physical Activity:</strong> Supports the development of
              gross motor skills and physical fitness.
            </li>
            <li>
              <strong>Calm and Relaxation:</strong> Offers a soothing
              environment that can help children unwind and focus.
            </li>
          </ul>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Maintenance and Safety
          </h2>
          <p>
            <strong>Cleanliness:</strong> Regular cleaning and maintenance are
            crucial to ensure the safety and hygiene of sandboxes, including
            covering them to protect against contaminants.
          </p>
          <p>
            <strong>Safety:</strong> It’s important to use non-toxic sand and
            ensure that sandboxes are well-designed with smooth edges and safe
            materials.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Popular Locations for Sandboxes in Indonesia
          </h2>
          <p>
            Sandboxes can be found across Indonesia, from urban parks in Jakarta
            to tourist resorts in Bali and community centers throughout the
            country, providing safe and enjoyable play spaces for children.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service7;
