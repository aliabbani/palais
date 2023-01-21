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
            carte de fidélité
          </div>
        </div>
        <div className="uppercase text-xl md:text-4xl font-black capitalize pb-6 pb-10">
          vous garder une place
        </div>
        <div className="paragraph mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. ok a galley of type and
          scrambled it to make a type specimen book. ok a galley of type and
          scrambled it to make a type specimen book. ok a galley of type and
          scrambled it to make a type specimen book.
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
