import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Brand = () => {
  return (
    <div className="flex flex-col content-around justify-between">
      <NavBar />
      <div className="brand-main bg-slate-300">
        <div className="flex flex-col md:flex-row justify-between pb-10 px-4 pt-6">
          <div className="uppercase text-2xl md:text-4xl font-semibold leading-tight text-gray-800">
            marque
          </div>
          <div className="flex md:justify-between font-semibold pt-4">
            <div className="pr-6 cursor-pointer uppercase text-red-600">
              notre histoire
            </div>
          </div>
        </div>
        <div className="px-4 md:px-40 text-base md:text-xl font-medium pb-14">
          <p className="pb-5 text-red-600">
            La formule originale a été créée en 2012 par Romeo Yaghi, chez
            Kinshasa, sous le nom de « Le Palais ».
          </p>
          <p className="pb-5">
            Au Palais, on retrouve le raffinement élégant et efficace d'un
            authentique restaurant international libanais.
          </p>
          <p className="pb-5 text-red-600">
            Depuis des décennies, la formule du Palais assure le succès avec ses
            mezzés libanais, ses plats principaux savoureux et tendres
            accompagnés de sa fameuse sauce et ses sushis fins et dorés.
          </p>
          <p className="pb-5">
            Ainsi que ses délicieux desserts. Les sélections de vins, tous issus
            de l'agriculture biologique, s'accordent parfaitement avec la
            formule Palais. Le rapide et un service attentionné fidèle à
            l'esprit de la maison. Dans le décor chaleureux du restaurant, de la
            terrasse et du piano bar. Serveuses dans des tenues impeccables en
            noir et blanc.
          </p>
          <p className="pb-5 text-red-600">
            2017 a été une année marquante: alors que nous ouvrons notre premier
            snack de restauration rapide nommé Royal Burger dans le centre
            commercial LC Waikiki.
          </p>
          <p className="pb-5">
            2022 a été une autre année marquante: alors que nous ouvrions une
            petite version de Le Palais au centre ville.
          </p>
          <p className="pb-5 text-red-600">
            En 2023, nous prévoyons d'ouvrir un nouveau restaurant dans le
            cercle des libanais.
          </p>
          <p className="pb-5">
            À vrai dire, ce fut un voyage incroyable. Votre amour et votre
            soutien nous a portés et nous a amenés jusqu'ici. Voici les deux
            prochaines années.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;
