import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Career = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [apply, setApply] = useState(false);
  const [apply2, setApply2] = useState(false);

  return (
    <div className="flex flex-col content-between">
      <NavBar />
      <div>
        <section className="mb-20">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: "50%",
              backgroundImage:
                "url('https://mdbootstrap.com/img/new/textures/full/142.jpg')",
              height: "500px",
            }}
          ></div>

          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center text-gray-800">
              <div
                className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
                style={{
                  marginTop: "-170px",
                  background: "hsla(0, 0%, 100%, 0.7)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <h1 className="text-3xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12 capitalize">
                  Rejoins notre équipe <br />
                  <span className="text-blue-600">
                    Explorez un monde d'opportunités
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Cashier */}
      <div class="flex justify-center pb-10">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-full mx-4 md:mx-12">
          <div className="text-gray-900 text-xl md:text-2xl font-black capitalize pb-4 md:pb-6">
            Cassier
          </div>
          <p class="text-gray-700 text-base mb-4">
            Nous recherchons une caissière sympathique, dynamique et dynamique.
            Vous travaillerez avec le public dans un restaurant, nous avons donc
            besoin de quelqu'un qui est à l'aise pour interagir avec les gens
            dans un environnement en évolution rapide.
          </p>
          <button
            type="button"
            className={`inline-block px-4 py-2 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out 
            ${show ? "hidden" : ""}`}
            onClick={() => setShow(!show)}
          >
            Voir plus
          </button>
          {show && (
            <div>
              <div>
                <div className="text-lg md:text-xl py-2">
                  Le caissier sera chargé de :
                </div>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - S'assurer que toutes les transactions en espèces sont
                  effectuées correctement et promptement.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Accepter les paiements des clients par carte de crédit ou
                  carte de débit ou rendre la monnaie si nécessaire.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Échangez des timbres, des offres et des coupons.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Maintenir une zone de travail ordonnée en la gardant propre
                  et organisé à tout moment.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Vous devriez être capable d'effectuer plusieurs tâches en
                  prenant des commandes de clients et les appeler à la caisse.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Offrir un excellent service à la clientèle en accueillant
                  les clients poliment, en offrant de l'aide en cas de besoin et
                  en les remerciant lorsqu'ils quittent le restaurant satisfaits
                  de leur visite (ou ne pas).
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Vous devez avoir des connaissances sur le système de
                  commande.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Vous devriez être capable de mémoriser le menu des aliments,
                  y compris le ingrédient dans une période d'un mois.
                </p>
              </div>
              <div>
                <div className="text-lg md:text-xl py-2">
                  La qualification de caissier :
                </div>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Connaissances informatiques de base.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - 2 expériences en tant que caissière.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Familiarité avec les équipements électroniques, comme la
                  caisse enregistreuse et POS
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Bonnes compétences en mathématiques.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Solides compétences en communication et en gestion du temps.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Orienté satisfaction client.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Baccalauréat ou équivalent en gestion d'entreprise,
                  comptabilité ou marketing.
                </p>
              </div>
              <button
                type="button"
                className={`mt-6 inline-block px-4 py-2 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out 
                ${apply ? "hidden" : ""}`}
                onClick={() => setApply(!apply)}
              >
                Appliquer maintenant
              </button>
              {apply && (
                <div>
                  <form action="https://formspree.io/f/mknanvrb" method="POST">
                    <div className="text-lg md:text-xl font-black capitalize pt-6 pb-6 md:pt-10 pb-10">
                      vos informations
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Prénom:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        type="text"
                        name="Prénom"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Nom de famille:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        type="text"
                        name="Nom de famille"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Email:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        type="email"
                        name="email"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Numéro de téléphone:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        placeholder=""
                        bordered="false"
                        type="tel"
                        name="Numéro de téléphone"
                        pattern="[0-9]{9}"
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Resume:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        bordered="false"
                        type="file"
                        name="Numéro de téléphone"
                        required
                      />
                    </div>
                    <div>
                      En sélectionnant Soumettre, toutes les informations que
                      vous fournissez seront protégées. Nous pouvons vous
                      contacter au sujet de votre soumission.
                    </div>
                    <div className="py-6">
                      <button
                        type="submit"
                        className="inline-block px-4 py-2 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out "
                      >
                        Soumettre
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* second */}
      <div class="flex justify-center pb-10">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-full mx-4 md:mx-12">
          <div className="text-gray-900 text-xl md:text-2xl font-black capitalize pb-4 md:pb-6">
            Cuisinier
          </div>
          <p class="text-gray-700 text-base mb-4">
            Nous recherchons un chef de partie talentueux pour aider notre
            équipe culinaire à créer des repas mémorables pour notre restaurant.
            Vous serez responsable d'une section spécifique de la cuisine, en
            préparant des plats de haute qualité qui répondent aux normes du
            chef de cuisine et en vous assurant que votre poste est hygiénique
            et bien approvisionné.
          </p>
          <button
            type="button"
            className={`inline-block px-4 py-2 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out 
            ${show2 ? "hidden" : ""}`}
            onClick={() => setShow2(!show2)}
          >
            Voir plus
          </button>
          {show2 && (
            <div>
              <div>
                <div className="text-lg md:text-xl py-2">
                  Le chef sera chargé de :
                </div>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Préparer des aliments spécifiques et des composants de repas
                  à votre station.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Suivre les instructions fournies par le chef de cuisine.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Collaborer avec le reste de l'équipe culinaire pour assurer
                  une nourriture et un service de haute qualité.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Garder votre zone de la cuisine sûre et hygiénique.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Améliorer vos méthodes de préparation des aliments en
                  fonction des retours d'expérience.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Assisting in other areas of the kitchen when required.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Capacité à mémoriser tout le menu et à travailler dans
                  n'importe quelle section de la cuisine
                </p>
              </div>
              <div>
                <div className="text-lg md:text-xl py-2">
                  La qualification de caissier :
                </div>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Diplôme d'une école de cuisine.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - 2 ans d'expérience dans un poste similaire.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Capacité à bien travailler en équipe.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Excellentes capacités d'écoute et de communication.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Connaissance des meilleures pratiques en matière de sécurité
                  et d'hygiène.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Disponible pour travailler par quarts les fins de semaine et
                  les jours fériés.
                </p>
              </div>
              <button
                type="button"
                className={`mt-6 inline-block px-4 py-2 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out 
                ${apply2 ? "hidden" : ""}`}
                onClick={() => setApply2(!apply2)}
              >
                Appliquer maintenant
              </button>
              {apply2 && (
                <div>
                  <form action="https://formspree.io/f/mknanvrb" method="POST">
                    <div className="text-lg md:text-xl font-black capitalize pt-6 pb-6 md:pt-10 pb-10">
                      vos informations
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Prénom:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        type="text"
                        name="Prénom"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Nom de famille:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        type="text"
                        name="Nom de famille"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Email:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        type="email"
                        name="email"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Numéro de téléphone:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        placeholder=""
                        bordered="false"
                        type="tel"
                        name="Numéro de téléphone"
                        pattern="[0-9]{9}"
                        required
                      />
                    </div>
                    <div className="pb-6">
                      <div className="text-gray-700 text-sm font-medium capitalize">
                        *Resume:
                      </div>
                      <input
                        className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
                        bordered="false"
                        type="file"
                        name="Numéro de téléphone"
                        required
                      />
                    </div>
                    <div>
                      En sélectionnant Soumettre, toutes les informations que
                      vous fournissez seront protégées. Nous pouvons vous
                      contacter au sujet de votre soumission.
                    </div>
                    <div className="py-6">
                      <button
                        type="submit"
                        className="inline-block px-4 py-2 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out "
                      >
                        Soumettre
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
