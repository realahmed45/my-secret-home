import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const TravelDescription = () => {
  const [openImage, setOpenImage] = useState(null);

  const mainImageUrl =
    "https://mysecrethomebali.com/wp-content/uploads/2024/09/3.png";
  const imageUrls = [
    "https://mysecrethomebali.com/wp-content/uploads/2024/09/3.png",
    "https://mysecrethomebali.com/wp-content/uploads/2024/09/2.png",
    "https://mysecrethomebali.com/wp-content/uploads/2024/08/1.png",
    "https://mysecrethomebali.com/wp-content/uploads/2024/08/3-1.png",
    "https://mysecrethomebali.com/wp-content/uploads/2024/09/3f21ec78-4228-440e-aa09-dba3a079f27f.jpeg",
    "https://mysecrethomebali.com/wp-content/uploads/2024/08/4.png",
  ];

  const handleImageClick = (url) => {
    setOpenImage(url);
  };

  const closeImage = () => {
    setOpenImage(null);
  };

  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-20 mb-5">
          Bassamagi Travel and Tour
        </h1>
        <img src={mainImageUrl} alt="Main Banner" className="w-full" />
        <div className="text-lg mt-5">
          <h1 className="font-normal text-2xl mb-3 mt-5">
            Explore Indonesia with Bassamagi Travel Agency
          </h1>
          <p>
            Welcome to Bassamagi Travel Agency, your gateway to the breathtaking
            beauty and rich culture of Indonesia! Our dedicated team is here to
            ensure you have an unforgettable experience as you explore this
            diverse archipelago.
          </p>
          <h2 className="font-normal mt-6 mb-4">What to Expect:</h2>
          <ol className="list-decimal ml-5">
            <li className="my-3">
              <strong>Stunning Landscapes:</strong> From the lush rice terraces
              of Ubud to the pristine beaches of Bali, guests will marvel at
              Indonesia’s natural wonders. Don’t miss the majestic volcanoes,
              crystal-clear waters, and vibrant coral reefs that make this
              country a paradise for nature lovers.
            </li>
            <li className="my-3">
              <strong>Cultural Richness:</strong> Experience the warmth of
              Indonesian hospitality and immerse yourself in local traditions.
              Guests can participate in traditional ceremonies, explore ancient
              temples like Borobudur and Prambanan, and visit local markets
              filled with handcrafted goods.
            </li>
            <li className="my-3">
              <strong>Adventure Awaits:</strong> For the thrill-seekers,
              Indonesia offers countless adventure opportunities. From hiking to
              the summit of Mount Rinjani to diving in the world-renowned waters
              of Komodo National Park, every day brings a new adventure.
            </li>
            <li className="my-3">
              <strong>Culinary Delights:</strong> Savor the unique flavors of
              Indonesian cuisine, from the spicy delights of rendang to the
              fresh seafood of coastal regions. Our guided food tours will take
              you to the best local eateries and markets.
            </li>
            <li className="my-3">
              <strong>Wildlife Encounters:</strong> Discover Indonesia’s
              incredible biodiversity. Guests can visit national parks like
              Borneo’s Tanjung Puting to see orangutans in their natural habitat
              or explore the lush jungles of Sumatra.
            </li>
          </ol>
          <p className="mt-5 mb-7">
            At Bassamagi Travel Agency, we believe that travel is not just about
            seeing new places; it’s about creating lasting memories. Our
            tailored packages and expert guides ensure that every moment of your
            Indonesian adventure is magical. Join us and uncover the wonders of
            Indonesia!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-0 mt-5">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-60 object-cover"
              onClick={() => handleImageClick(url)}
            />
          ))}
        </div>
      </div>
      {openImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeImage}
        >
          <img
            src={openImage}
            alt="Opened Image"
            className="max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={closeImage}
          >
            ×
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default TravelDescription;
