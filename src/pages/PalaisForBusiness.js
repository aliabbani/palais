import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logoColored from "../assets/images/logo-colored.png";

const PalaisForBusiness = () => {
  return (
    <div>
      <NavBar />
      <section className="">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="svg absolute hidden lg:block"
          style={{
            height: "560px",
            width: "100%",
            zIndex: "-10",
            overflow: "hidden",
          }}
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="hsl(217, 102%, 99%)" offset="0%"></stop>
              <stop stopColor="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
          ></path>
        </svg>

        <div className="px-6 py-12 lg:py-32 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  The best offer <br />
                  <span className="text-yellow-500">for your business</span>
                </h1>
                <a
                  className="inline-block px-7 py-3 mr-2 bg-yellow-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#promotion"
                  role="button"
                >
                  Get started
                </a>
              </div>
              <div className="mb-12 lg:mb-0">
                <img
                  src={logoColored}
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* business event */}
      <div id="promotion">
        <div>
          <div className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight pt-4">
            événement d'entreprise
          </div>
          <div className="container my-4 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center lg:text-left">
              <div className="container mx-auto xl:px-32 text-center lg:text-left">
                <div className="grid lg:grid-cols-2 flex items-center">
                  <div className="mb-12 lg:mb-0">
                    <div
                      className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                      style={{
                        background: "hsla(0, 0%, 100%, 0.55)",
                        backdropFilter: "blur(30px)",
                        zIndex: "1",
                      }}
                    >
                      <h2 className="text-3xl font-bold mb-4 display-5">
                        organisez votre événement d'entreprise
                      </h2>
                      <p className="text-gray-500 mb-12">
                        Organisez votre événement d'entreprise dans l'un de nos
                        restaurants, que vous célébriez un succès, lanciez de
                        nouvelles fonctionnalités ou réunissiez vos employés. Le
                        Palais est le meilleur endroit pour organiser votre
                        événement.
                      </p>

                      <div className="grid md:grid-cols-3 gap-x-6">
                        <div className="mb-12 md:mb-0">
                          <h2 className="text-3xl font-bold text-dark mb-4">
                            100%
                          </h2>
                          <h5 className="text-lg font-medium text-gray-500 mb-0">
                            VIP Treatment
                          </h5>
                        </div>

                        <div className="mb-12 md:mb-0">
                          <h2 className="text-3xl font-bold text-dark mb-4">
                            100%
                          </h2>
                          <h5 className="text-lg font-medium text-gray-500 mb-0">
                            Menu Planning
                          </h5>
                        </div>

                        <div className="">
                          <h2 className="text-3xl font-bold text-dark mb-4">
                            We
                          </h2>
                          <h5 className="text-lg font-medium text-gray-500 mb-0">
                            Understand Your Budget
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* w: 600 h: 900 */}
                    <img
                      src="https://i.ibb.co/ySFRLmv/business-conference.png"
                      className="w-full shadow-lg fancy-border-radius rotate-lg-6"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PalaisForBusiness;

// wedding party
// Your Staff food organize your day to day menu
