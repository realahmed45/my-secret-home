import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Service3 = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-32 mb-5 mr-4">
          Breakfast in Indonesia: A Flavorful Start to the Day
        </h1>
        <img
          src="https://mysecrethomebali.com/wp-content/uploads/2024/09/6.jpg"
          alt="Breakfast in Indonesia"
          className="w-[90%] h-[80%]"
        />
        <div className="text-lg mt-10">
          <p className="mb-5">
            Indonesian breakfast is a delightful reflection of the country’s
            rich culinary heritage, offering a variety of dishes that are as
            diverse as its many islands. Breakfast in Indonesia often combines
            sweet, savory, and spicy elements, featuring locally sourced
            ingredients and traditional flavors. Here’s a look at some popular
            Indonesian breakfast options:
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Popular Indonesian Breakfast Options
          </h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>
              <strong>Nasi Goreng:</strong> Nasi Goreng, which means “fried
              rice,” is one of Indonesia’s most beloved breakfast dishes.
              Typically made from leftover rice, it’s stir-fried with a mix of
              vegetables, proteins like chicken, shrimp, or beef, and flavored
              with sweet soy sauce (kecap manis), garlic, shallots, and chili.
            </li>
            <li>
              <strong>Bubur Ayam:</strong> Bubur Ayam is a savory chicken
              porridge that is both comforting and flavorful. This dish features
              rice porridge cooked until creamy and topped with shredded
              chicken, fried shallots, sliced green onions, and a hard-boiled
              egg.
            </li>
            <li>
              <strong>Ketoprak:</strong> Ketoprak is a Jakarta specialty that
              combines rice cake (ketupat), tofu, bean sprouts, and rice
              vermicelli in a rich peanut sauce.
            </li>
            <li>
              <strong>Roti Bakar:</strong> Roti Bakar is Indonesia’s take on
              toasted bread, often enjoyed as a quick and satisfying breakfast.
              The bread is typically toasted with butter and then filled with
              sweet toppings like chocolate, cheese, or kaya (a coconut and egg
              jam).
            </li>
            <li>
              <strong>Lontong Sayur:</strong> Lontong Sayur features compressed
              rice cakes (lontong) served in a flavorful vegetable curry.
            </li>
            <li>
              <strong>Gado-Gado:</strong> Gado-Gado is a popular Indonesian
              salad made from a mix of steamed vegetables, tofu, tempeh, and
              sometimes hard-boiled eggs, all topped with a generous serving of
              peanut sauce.
            </li>
            <li>
              <strong>Pisang Goreng:</strong> For a sweeter option, Pisang
              Goreng (fried bananas) is a popular choice. Ripe bananas are
              coated in a light batter and deep-fried until golden brown and
              crispy.
            </li>
            <li>
              <strong>Soto:</strong> Soto is a traditional Indonesian soup that
              varies by region, but most versions feature a flavorful broth made
              from chicken or beef, with spices like turmeric and ginger.
            </li>
          </ul>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Breakfast Culture
          </h2>
          <p>
            In Indonesia, breakfast is often a social meal enjoyed with family
            or friends. Many Indonesians prefer savory dishes for breakfast, but
            sweet options are also popular, particularly in urban areas.
            Breakfast might be enjoyed at home or at local warungs (small
            eateries) and cafes.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service3;
