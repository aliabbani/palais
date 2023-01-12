import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../index.css";

const Loyality = () => {
  return (
    <div>
      <NavBar />
      <div className="main flex flex-col justify-around pb-10 px-2 md:px-72">
        <div>
          <div className="uppercase text-2xl md:text-6xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
            carte de fidélité
          </div>
        </div>
        <div className="uppercase text-xl md:text-4xl font-black capitalize pb-6 pb-10">
          vous garder une place
        </div>
        <div class="paragraph mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <button
          type="submit"
          className="bg-[#ffbc0d] rounded-md border-none py-3 px-4 text-center no-underline text-base text-[#292929] outline-none w-32"
        >
          Apply Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Loyality;
