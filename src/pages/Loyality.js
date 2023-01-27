import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../index.css";

const Loyality = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="main flex flex-col justify-around pb-10 px-2 md:px-20 lg:px-40">
        <div>
          <div className="uppercase text-2xl md:text-6xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
            Palais club card
          </div>
        </div>
        <div className="uppercase text-xl md:text-4xl font-black capitalize pb-6 pb-10">
          vous garder une place
        </div>
        <div className="border-4 border-white p-6 leading-relaxed bg-[#d3d3d3] mb-10">
          Nous savons que vous êtes un client fidèle et nous apprécions votre
          entreprise. C'est pourquoi nous offrons une remise spéciale sur le
          menu grâce à notre programme de fidélité. Vous souhaitez bénéficier
          d'une réduction sur votre prochaine expérience culinaire ? Nous sommes
          là pour vous aider. Notre carte de fidélité offre une réduction sur
          nos 4 restaurants. Ainsi, vous pouvez profiter de la nourriture que
          vous aimez à un prix inférieur. Cliquez simplement sur Appliquer. Une
          fois sur place, vous pourrez vous inscrire pour votre carte de
          fidélité et commencer à profiter des avantages immédiatement !
        </div>
        <button
          type="submit"
          className={`bg-[#ffbc0d] rounded-md border-none py-3 px-4 text-center no-underline text-base text-[#292929] outline-none w-32 ${
            state ? "hidden" : "block"
          }`}
          onClick={() => setState(true)}
        >
          Apply Now
        </button>
        {state ? (
          <form action="https://formspree.io/f/mknanvrb" method="POST">
            <div className="text-xl md:text-2xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
              your info
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                type="text"
                name="first name"
                placeholder="*First Name"
                required
              />
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                type="text"
                name="last name"
                placeholder="*Last Name"
                required
              />
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                type="email"
                name="email"
                placeholder="*Personal Email"
                required
              />
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                placeholder="*Phone Number"
                bordered="false"
                type="tel"
                name="phone number"
                pattern="[0-9]{9}"
                required
              />
            </div>
            <div>
              By selecting Submit, any information you provide will be
              protected. We may contact you regarding your submission.
            </div>
            <div className="py-20">
              <button
                type="submit"
                className="bg-[#ffbc0d] rounded-md border-none py-3 px-8 text-center no-underline text-base text-[#292929] outline-none w-auto min-w-117"
              >
                Submit
              </button>
            </div>
          </form>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Loyality;
