import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div className="">
      <NavBar />
      <div className="px-2 md:px-72">
        <div className="text-2xl md:text-6xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
          contact us
        </div>
        <div>
          Vous avez une question ou un commentaire ? Vous souhaitez réserver
          pour un événement à un de nos restaurants? Veuillez nous contacter au
          : 0996-555-555 ou au : 0996-333-333.
        </div>
        <form action="https://formspree.io/f/mknanvrb" method="POST">
          <div className="text-xl md:text-2xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
            Détails
          </div>
          <label>
            <textarea
              name="message"
              placeholder="*Veuillez fournir plus de détails sur vos demandes"
              className="h-28 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
              required
            ></textarea>
          </label>
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
            fournissez seront protégées. Nous pouvons vous contacter au sujet de
            votre soumission.
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
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
