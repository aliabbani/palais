import React from "react";
import Footer from "../components/Footer";
import GridRestaurants from "../components/GridRestaurants";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Logo from "../assets/images/logo-colored.png";

// GridRestaurants (carts)
// w:780px h:520px

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />

      <div className="">
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-20">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                <div className="flex lg:py-12">
                  <img
                    src={Logo}
                    className="w-full rounded-lg shadow-lg ml-0 md:ml-16 z-10"
                    id="cta-img-nml-50"
                    alt=""
                  />
                </div>
              </div>

              <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                <div className="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="text-3xl font-bold mb-6">
                      Let it surprise you
                    </h2>
                    <p className="mb-6 pb-2 lg:pb-0">
                      Bienvenue dans les concepts de restauration modernes les
                      plus attractifs Niché au cœur d'un environnement urbain en
                      effervescence, Palais Restaurants rassemble des personnes
                      à la recherche de sorties sociales enrichissantes et
                      d'expériences culinaires authentiques qui ressemblent à un
                      resetting voyage!.
                    </p>

                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                      <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Best team
                      </p>

                      <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Best quality
                      </p>

                      <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Best experience
                      </p>
                    </div>

                    <p>
                      Le Palais rassemble les gourmands autour de gourmandises
                      maison de grande qualité. Avec son atmosphère légère et
                      décontractée, Palais Attire petits et grands. At Le Dans
                      Le Palais, on retrouve le raffinement élégant et efficace
                      d'un authentiques restaurants libanais internationaux.
                      <br></br>
                      Depuis des décennies, la formule du Palais assure le
                      succès avec ses mezzés libanais, ses plats principaux
                      savoureux et tendres accompagnés de sa fameuse sauce et
                      ses sushis fins et dorés. Nam mattis faucibus imperdiet.
                      Le Palais est un jardin, Le Palais est un Piano Bar, Le
                      Palais est un lieu de détente à chicha. Vous sentirez
                      toujours nouveau et vous donnerez envie de revenir après
                      chaque visite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <h2 className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight pt-4">
        Palais restaurants
      </h2>
      <GridRestaurants />

      <Footer />
    </>
  );
};

export default Home;
