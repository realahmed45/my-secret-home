import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Service4 = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-32 mb-5">
          The Coconut in Indonesia: A Vital and Versatile Resource
        </h1>
        <img
          src="https://mysecrethomebali.com/wp-content/uploads/2024/09/8.jpg"
          alt="Coconut in Indonesia"
          className="w-[90%] h-[80%]"
        />
        <div className="text-lg mt-10">
          <p className="mb-5">
            Coconut holds a special place in Indonesian culture and cuisine,
            embodying the rich agricultural heritage of the country. Known
            locally as “kelapa,” the coconut is an integral part of daily life
            in Indonesia, providing nourishment, flavor, and a range of
            practical uses.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">Culinary Uses</h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>
              <strong>Coconut Milk and Cream:</strong>
              <ul className="list-disc ml-5">
                <li>
                  Coconut Milk: Extracted from grated coconut meat mixed with
                  water, coconut milk is a staple ingredient in Indonesian
                  cuisine, used in savory and sweet dishes.
                </li>
                <li>
                  Coconut Cream: A thicker version used in desserts and savory
                  dishes like rendang.
                </li>
              </ul>
            </li>
            <li>
              <strong>Coconut Oil:</strong>
              <ul className="list-disc ml-5">
                <li>
                  Cooking Oil: Used for frying and sautéing, valued for its high
                  smoke point and flavor.
                </li>
                <li>
                  Traditional Medicine: Utilized in beauty treatments and
                  traditional medicine for its moisturizing properties.
                </li>
              </ul>
            </li>
            <li>
              <strong>Desiccated Coconut:</strong> Used in baking and as a
              topping for snacks and sweets.
            </li>
            <li>
              <strong>Coconut Water:</strong> Served chilled as a refreshing
              drink or in tropical beverages.
            </li>
          </ol>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Traditional and Cultural Significance
          </h2>
          <p>
            Coconuts are deeply ingrained in the regional culinary traditions
            and crafts of Indonesia, from making ropes and mats from the husks
            to using coconut shells for handicrafts.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Economic Importance
          </h2>
          <p>
            Coconut cultivation is crucial to Indonesia's agricultural sector,
            significantly impacting local economies and providing livelihoods
            for farmers.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Environmental Impact
          </h2>
          <p>
            The coconut palm plays a crucial role in preventing soil erosion,
            supporting biodiversity, and maintaining ecological balance in
            tropical environments.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service4;
