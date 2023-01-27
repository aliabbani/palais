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
          entreprise.
          <br></br>
          C'est pourquoi nous offrons une remise spéciale sur le menu grâce à
          notre programme de fidélité.
          <br></br>
          Vous souhaitez bénéficier d'une réduction sur votre prochaine
          expérience culinaire ?
          <br></br>Nous sommes là pour vous aider.<br></br>
          <br></br>Notre carte de fidélité offre une réduction sur nos 4
          restaurants. Ainsi, vous pouvez profiter de la nourriture que vous
          aimez à un prix inférieur.
          <br></br>
          Cliquez simplement sur Appliquer maintenant. Une fois sur place, vous
          pourrez vous inscrire pour votre carte de fidélité et commencer à
          profiter des avantages immédiatement !
        </div>
        <button
          type="submit"
          className={`bg-[#ffbc0d] rounded-md border-none py-3 px-4 text-center no-underline text-base text-[#292929] outline-none w-52 ${
            state ? "hidden" : "block"
          }`}
          onClick={() => setState(true)}
        >
          Appliquer maintenant
        </button>
        {state ? (
          <form action="https://formspree.io/f/mknanvrb" method="POST">
            <div className="text-xl md:text-2xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
              vos informations
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                type="text"
                name="Prénom"
                placeholder="*Prénom"
                required
              />
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                type="text"
                name="Nom de famille"
                placeholder="*Nom de famille"
                required
              />
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                type="email"
                name="email"
                placeholder="*Email personnel"
                required
              />
            </div>
            <div className="pb-6">
              <input
                className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                placeholder="*Numéro de téléphone"
                bordered="false"
                type="tel"
                name="Numéro de téléphone"
                pattern="[0-9]{9}"
                required
              />
            </div>
            <div>
              En sélectionnant Soumettre, toutes les informations que vous
              fournissez seront protégées. Nous pouvons vous contacter au sujet
              de votre soumission.
            </div>
            <div className="py-20">
              <button
                type="submit"
                className="bg-[#ffbc0d] rounded-md border-none py-3 px-8 text-center no-underline text-base text-[#292929] outline-none w-auto min-w-117"
              >
                Soumettre
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
