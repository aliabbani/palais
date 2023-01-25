import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import "../index.css";

const Brand = () => {
  const [story, setStory] = useState(true);

  return (
    <div className="flex flex-col content-around justify-between">
      <NavBar />
      <div className="brand-main bg-slate-300">
        <div className="flex flex-col md:flex-row justify-between pb-10 px-4 pt-6">
          <div className="uppercase text-2xl md:text-4xl font-semibold leading-tight text-gray-800">
            brand
          </div>
          <div className="flex md:justify-between font-semibold pt-4">
            <div className="pr-6 cursor-pointer uppercase text-red-600">
              our story
            </div>
          </div>
        </div>
        <div className="px-4 md:px-40 text-base md:text-xl font-medium pb-14">
          <p className="pb-5 text-red-600">
            The original formula was created in 2012 by Romeo Yaghi, at
            Kinshasa, under the name of "Le Palais".
          </p>
          <p className="pb-5">
            At Le Palais, we find the elegant and efficient refinement of an
            authentic Lebanese international restaurant. For decades, the Palais
            formula has ensured success with its Lebanese Mezze, its tasty and
            tender main dishes accompanied by its famous sauce, and its fine and
            golden sushi.
          </p>
          <p className="pb-5 text-red-600">
            For decades, the Palais formula has ensured success with its
            Lebanese Mezze, its tasty and tender main dishes accompanied by its
            famous sauce, and its fine and golden sushi.
          </p>
          <p className="pb-5">
            As well as its delicious desserts. The wine selections, all from
            organic farming, go perfectly with the Palais formula. The fast and
            attentive service is faithful to the spirit of the house. In the
            warm decor of the restaurant, the terrace, and the piano bar.
            Waitresses in impeccable black and white outfits.
          </p>
          <p className="pb-5 text-red-600">
            2017 was a landmark year: as we open our first fast food snack named
            Royal Burger in the LC Waikiki Mall.
          </p>
          <p className="pb-5">
            2022 was another landmark year: as we opened a small version of Le
            Palais in the centre ville.
          </p>
          <p className="pb-5 text-red-600">
            In 2023, we plan to open a new restaurant in the cercle of Libanese.
          </p>
          <p className="pb-5">
            Truth be told, it’s been an amazing journey. Your love & support
            carried us & got us this far. Here’s to the next couple of years.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;
