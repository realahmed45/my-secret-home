import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Service5 = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-32 mb-5">
          Picnicking in Indonesia: Enjoying Nature and Cuisine
        </h1>
        <img
          src="https://mysecrethomebali.com/wp-content/uploads/2024/09/9.jpg"
          alt="Picnicking in Indonesia"
          className="w-[90%] h-[80%]"
        />
        <div className="text-lg mt-10">
          <p className="mb-5">
            Picnicking in Indonesia offers a unique blend of natural beauty,
            vibrant culture, and delicious cuisine. With its diverse landscapes,
            from tropical beaches and lush rice paddies to scenic highlands and
            serene lakes, Indonesia provides a variety of picturesque settings
            perfect for a memorable picnic experience.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Popular Picnic Spots
          </h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>
              <strong>Bali:</strong>
              <ul className="list-disc ml-5">
                <li>
                  Tegallalang Rice Terraces: Enjoy stunning views of Bali’s
                  iconic rice terraces.
                </li>
                <li>
                  Uluwatu Beach: Dramatic cliff views and clear blue waters
                  perfect for a beachside picnic.
                </li>
              </ul>
            </li>
            <li>
              <strong>Jakarta:</strong>
              <ul className="list-disc ml-5">
                <li>
                  Ragunan Zoo: A family-friendly spot with lush greenery and
                  diverse wildlife.
                </li>
                <li>
                  Ancol Dreamland: Recreational park with beach and landscaped
                  gardens for picnicking.
                </li>
              </ul>
            </li>
            <li>
              <strong>Yogyakarta:</strong>
              <ul className="list-disc ml-5">
                <li>
                  Kaliurang: Cool mountain air and beautiful views on the slopes
                  of Mount Merapi.
                </li>
                <li>
                  Taman Sari Water Castle: Historic beauty with lush gardens for
                  a serene picnic.
                </li>
              </ul>
            </li>
            <li>
              <strong>Bandung:</strong>
              <ul className="list-disc ml-5">
                <li>
                  Tangkuban Perahu: Picnic with a view of the stunning volcanic
                  crater.
                </li>
                <li>
                  Kebun Teh Rancabali: Tea plantations offering fresh air and
                  picturesque scenery.
                </li>
              </ul>
            </li>
            <li>
              <strong>Lombok:</strong> Kuta Beach: Laid-back atmosphere perfect
              for picnicking on the sand.
            </li>
          </ol>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Picnic Essentials
          </h2>
          <p>
            <strong>Food and Drinks:</strong> Pack local Indonesian favorites
            and fresh fruits for refreshment. Include snacks like krupuk and
            pisang goreng, along with coconut water or iced tea.
          </p>
          <p>
            <strong>Picnic Gear:</strong> Bring a comfortable picnic blanket or
            mat, a cooler or basket for your food, and necessary utensils,
            including trash bags for clean-up.
          </p>
          <p>
            <strong>Comfort and Safety:</strong> Use sun protection, bug
            repellent, and be mindful of your comfort and health.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Cultural Etiquette
          </h2>
          <p>
            Be respectful of local traditions and customs, especially in
            culturally significant areas. Always clean up thoroughly to maintain
            the beauty of the location for others.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service5;
