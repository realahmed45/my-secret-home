import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Service2 = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-52 mt-24 my-14">
        <h1 className="text-center text-4xl text-[#dc9c34] font-normal mt-32 mb-5 mr-4">
          Massage Services at Secret Home Bali
        </h1>
        <img
          src="https://mysecrethomebali.com/wp-content/uploads/2024/09/Market-Research-Competitor-Analysis-Writing-4.jpg"
          alt="Massage Services"
          className="w-[90%] h-[80%]"
        />
        <div className="text-lg mt-10">
          <p className="mb-5">
            Welcome to Secret Home Bali, where tranquility and rejuvenation
            blend seamlessly with the natural beauty of Bali. Our exclusive
            retreat offers an array of massage and wellness services designed to
            enhance your relaxation and well-being in the heart of this island
            paradise.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Signature Massage Treatments
          </h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>
              <strong>Traditional Balinese Massage:</strong> Experience the
              authentic essence of Bali with our Traditional Balinese Massage.
              This ancient technique combines gentle stretches, acupressure, and
              aromatherapy to improve circulation, relieve muscle tension, and
              restore balance.
            </li>
            <li>
              <strong>Deep Tissue Massage:</strong> Ideal for those seeking
              relief from chronic muscle tension and stress, our Deep Tissue
              Massage targets the deeper layers of muscle and connective tissue.
            </li>
            <li>
              <strong>Hot Stone Massage:</strong> Indulge in the ultimate
              relaxation with our Hot Stone Massage. Heated basalt stones are
              placed on specific points of your body, helping to melt away
              tension, ease sore muscles, and promote a profound sense of calm
              and well-being.
            </li>
            <li>
              <strong>Aromatherapy Massage:</strong> Infused with the healing
              properties of essential oils, our Aromatherapy Massage offers a
              soothing and therapeutic experience.
            </li>
            <li>
              <strong>Four-Hand Massage:</strong> For an extraordinary sensory
              experience, try our Four-Hand Massage. Two therapists work in
              synchrony, using coordinated strokes to deliver a deeply relaxing
              and invigorating treatment.
            </li>
            <li>
              <strong>Foot Reflexology:</strong> Focus on the feet with our Foot
              Reflexology treatment, which stimulates specific points on the
              feet to improve overall health and well-being.
            </li>
            <li>
              <strong>Couples Massage:</strong> Share a serene and intimate
              experience with a loved one through our Couples Massage. Enjoy
              side-by-side treatments in a private, tranquil setting, creating a
              shared moment of relaxation and connection.
            </li>
          </ul>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Additional Wellness Services
          </h2>
          <p>
            <strong>Yoga and Meditation Sessions:</strong> Complement your
            massage with personalized yoga or meditation sessions, guided by
            experienced instructors to enhance your physical and mental
            well-being.
          </p>
          <p>
            <strong>Detox and Spa Rituals:</strong> Indulge in a range of detox
            and spa rituals designed to rejuvenate and refresh, including body
            scrubs, wraps, and facials.
          </p>
          <p>
            <strong>Personalized Wellness Plans:</strong> Work with our wellness
            experts to create a customized plan that integrates massage with
            other holistic practices tailored to your individual needs and
            goals.
          </p>
          <h2 className="text-2xl mt-6 mb-4 text-[#dc9c34]">
            Ambience and Setting
          </h2>
          <p>
            At Secret Home Bali, we prioritize creating a serene and soothing
            environment to enhance your massage experience. Our massage rooms
            are designed with natural materials, soft lighting, and calming
            décor to ensure a peaceful escape from the outside world.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service2;
