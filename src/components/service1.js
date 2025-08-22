import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import mainImage from "../videos/surfing.png"; // Make sure the path matches your project structure

const Service1 = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-20 mb-5">
          Surfing in Indonesia
        </h1>
        <img src={mainImage} alt="Surfing in Indonesia" className="w-full" />
        <div className="text-lg mt-10">
          <p className="mb-5">
            Indonesia is renowned as one of the world’s premier surfing
            destinations, offering a diverse range of waves and surf experiences
            across its sprawling archipelago. With its tropical climate,
            pristine beaches, and consistent swell, Indonesia attracts surfers
            from around the globe seeking both adventure and paradise.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Top Surfing Destinations
          </h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>
              <strong>Bali:</strong> Often considered the epicenter of surfing
              in Indonesia, Bali boasts a variety of surf spots suitable for all
              skill levels.
            </li>
            <li>
              <strong>Uluwatu:</strong> Famous for its powerful reef breaks and
              stunning cliffside views.
            </li>
            <li>
              <strong>Kuta Beach:</strong> Ideal for beginners with its long,
              mellow waves.
            </li>
            <li>
              <strong>Canggu:</strong> Known for its hip vibe and consistent,
              high-quality surf.
            </li>
            <li>
              <strong>Sumatra:</strong> Home to some of Indonesia’s most
              renowned surf spots.
            </li>
            <li>
              <strong>Mentawai Islands:</strong> An off-the-beaten-path paradise
              with world-class waves, such as Macaronis and Padang Padang.
            </li>
            <li>
              <strong>Nias Island:</strong> Offers epic left-handers and is less
              crowded than other spots.
            </li>
            <li>
              <strong>Java:</strong> Provides a mix of challenging and
              accessible surf locations.
            </li>
            <li>
              <strong>Pacitan:</strong> Known for its dramatic cliffs and
              consistent waves.
            </li>
            <li>
              <strong>G-Land:</strong> Famous for its long, powerful left-hand
              reef breaks, suitable for advanced surfers.
            </li>
            <li>
              <strong>Lombok:</strong> Offers a more relaxed alternative to Bali
              with equally impressive waves.
            </li>
            <li>
              <strong>Desert Point:</strong> Renowned for its long, barreling
              left-handers.
            </li>
            <li>
              <strong>Kuta Lombok:</strong> Great for beginners and intermediate
              surfers with a more laid-back atmosphere.
            </li>
            <li>
              <strong>Sumbawa:</strong> Offers a range of uncrowded,
              high-quality surf breaks.
            </li>
            <li>
              <strong>Lakey Peak:</strong> Known for its powerful and consistent
              waves, ideal for more experienced surfers.
            </li>
            <li>
              <strong>Scar Reef:</strong> A challenging reef break that attracts
              advanced surfers looking for intense action.
            </li>
          </ul>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Surfing Conditions
          </h2>
          <p>
            Indonesia’s surf season typically runs from April to October, during
            the dry season, when the south-west monsoon brings consistent
            swells. The best conditions are generally found on the western
            coasts of the islands, where the trade winds create perfect wave
            formations.
          </p>
          <p>
            <strong>Wave Types:</strong> Indonesia offers a variety of wave
            types, including reef breaks, point breaks, and beach breaks.
            Whether you’re looking for long, barreling waves or mellow, rolling
            swells, Indonesia has something to offer.
          </p>
          <p>
            <strong>Water Temperature:</strong> The water is warm year-round,
            typically ranging between 26°C and 30°C (79°F to 86°F), so a wetsuit
            is rarely needed.
          </p>
          <p>
            <strong>Crowds:</strong> Popular spots like Bali and the Mentawais
            can get crowded, but there are plenty of more remote locations for
            those seeking solitude and less traffic in the waves.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">Surf Culture</h2>
          <p>
            Indonesia’s surf culture is deeply ingrained in its coastal
            communities. Local surf schools, surf camps, and friendly locals
            make it easy for visitors to immerse themselves in the surfing
            lifestyle. The laid-back, beach-oriented culture is reflected in the
            warm hospitality of the Indonesian people, who often become fast
            friends with visiting surfers.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">Practical Tips</h2>
          <p>
            <strong>Travel Logistics:</strong> Most surf destinations in
            Indonesia are accessible via domestic flights from major hubs like
            Jakarta and Bali. Some remote locations may require additional boat
            transfers.
          </p>
          <p>
            <strong>Accommodation:</strong> Options range from budget hostels to
            luxury beachfront resorts. Many surf camps offer all-inclusive
            packages with accommodation, meals, and guided surf trips.
          </p>
          <p>
            <strong>Local Customs:</strong> Respect local customs and the
            environment. Many surf spots are located near small villages where
            traditional practices are observed.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service1;
