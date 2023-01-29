import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RestaurantsSlider from "../components/RestaurantsSlider";
import RestaurantsMaps from "../components/RestaurantsMaps";
import PalaisSnackOffer from "../components/PalaisSnackOffer";
import {
  palaisMenuAmuseBouche,
  palaisSalades,
  palaisPatesEtRisottos,
  palaisPizza,
  palaisSandwiches,
  palaisBurgers,
  palaisMezzesFroids,
  palaisMezzesChauds,
  palaisShawarma,
  palaisGrillades,
  palaisPlats,
  palaisManakishEtKaak,
  palaisDesserts,
  palaisSushiNegiri,
  palaisSushiEntreesEtSalades,
  palaisSushiMakiRolls,
  palaisSushiLePalaisRolls,
  palaisSushiSashimi,
  palaisSushiChefSignaturesRolls,
  palaisSushiLesPlateaux,
} from "../dataLePalais";

const Lepalais = () => {
  const [nav, setNav] = useState(1);
  const [sushiNav, setSushiNav] = useState(1);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <NavBar />
      <RestaurantsSlider
        src1="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        src2="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        src3="https://images.unsplash.com/photo-1567667778211-b19f5a4e1efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      {/* <div className="text-center pt-5 md:pt-1">
        <a
          href="https://menu.omegasoftware.ca/lepalais1"
          target="_blank"
          rel="noreferrer"
        >
          <button
            href="https://menu.omegasoftware.ca/lepalais1"
            type="button"
            className="md:hidden inline-block px-16 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
          >
            delivery menu
          </button>
        </a>
      </div> */}
      <nav className="flex flex-row flex-wrap md:justify-center align-center gap-2 md:gap-3 px-2 md:px-5 text-center text-xs md:text-XS py-5">
        <button
          onClick={() => setNav(1)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 1
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          AMUSE BOUCHE
        </button>
        <button
          onClick={() => setNav(2)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 2
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          SALADES
        </button>
        <button
          onClick={() => setNav(3)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 3
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          PATES ET RISOTTOS
        </button>
        <button
          onClick={() => setNav(4)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 4
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          PIZZA
        </button>
        <button
          onClick={() => setNav(5)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 5
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          SANDWICHES
        </button>
        <button
          onClick={() => setNav(6)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 6
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          BURGERS
        </button>
        <button
          onClick={() => setNav(7)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 7
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          MEZZES FROIDS
        </button>
        <button
          onClick={() => setNav(8)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 8
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          MEZZES CHAUDS
        </button>
        <button
          onClick={() => setNav(9)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 9
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          SHAWARMA
        </button>
        <button
          onClick={() => setNav(10)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 10
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          GRILLAGES
        </button>
        <button
          onClick={() => setNav(11)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 11
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          PLATES
        </button>
        <button
          onClick={() => setNav(12)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 12
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          Manakish Et kaak
        </button>
        <button
          onClick={() => setNav(13)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 13
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          Sushi
        </button>
        <button
          onClick={() => setNav(14)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 14
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          Desserts
        </button>
      </nav>
      {nav === 1 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Amuse Bouche
                </h2>
                {/* <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div> */}
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Voici un avant-goût de nos menus à venir. Ces petites
                  assiettes font partie d'une image plus grande, et nous pensons
                  qu'elles sont plutôt géniales.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisMenuAmuseBouche.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 2 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Salades
                </h2>
                {/* <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div> */}
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Salades fraîches composées uniquement des meilleurs légumes du
                  marché, soigneusement sélectionnés chaque jour.<br></br>
                  Nous sommes tout au sujet des salades. Vous n'avez pas besoin
                  de suivre un régime ou d'essayer de mieux manger pour les
                  aimer. Toujours pleines de saveurs, plus légères et plus
                  fraîches, ces salades sont parfaites pour toutes les
                  occasions.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisSalades.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 3 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Pates Et Risottos
                </h2>
                {/* <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div> */}
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Risotto riche et crémeux avec une consistance presque
                  semblable à celle d'une bouillie, mais chaque grain de riz
                  conserve une morsure distincte.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisPatesEtRisottos.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 4 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Pizza
                </h2>
                {/* <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div> */}
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Origine italienne consistant en un disque aplati de pâte à
                  pain garni d'une combinaison d'huile d'olive, d'origan, de
                  tomate, d'olives, de mozzarella ou d'un autre fromage, et de
                  nombreux autres ingrédients, cuit avec notre four à bois.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisPizza.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 5 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Sandwiches
                </h2>
                {/* <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div> */}
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Des sandwichs frais et délicieux pour le déjeuner ou le dîner.
                  Parfait pour une bouchée rapide ou pour partager.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisSandwiches.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 6 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Burgers
                </h2>
                {/* <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div> */}
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Des hamburgers qui peuvent élever votre moral et vous faire
                  sentir bien! Tous les meilleurs ingrédients. <br></br>Luxe et
                  confort à chaque bouchée. Nos burgers signatures sont faits
                  avec amour.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisBurgers.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 7 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Mezzes Froids
                </h2>
                <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Vous serez époustouflé par le goût unique et rafraîchissant de
                  nos mezzés froids. <br></br>
                  Notre sélection comprend des options végétariennes, des
                  trempettes, des salades et plus encore, qui sont parfaites
                  pour vous.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisMezzesFroids.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 8 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Mezzes Chauds
                </h2>
                <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Mezzes chauds est notre version moderne de la cuisine
                  méditerranéenne traditionnelle apéritifs.
                  <br></br>
                  Les différentes variétés présentes sur la carte regorgent de
                  saveur, fraîcheur et équilibre - la combinaison parfaite pour
                  améliorez l'expérience culinaire!
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisMezzesChauds.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 9 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Shawarma
                </h2>
                <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Notre shawarma au bœuf et au poulet, rôti à la flamme puis
                  taillés à la broche, sont les plus frais et les plus savoureux
                  ingrédients disponibles.<br></br> Nos chefs ont passé
                  d'innombrables heures à perfectionner nos recettes afin que
                  chaque bouchée soit plein de saveur.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisShawarma.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 10 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Grillades
                </h2>
                <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Nos Grillages vous font découvrir de nouvelles saveurs de
                  plats traditionnels. <br></br>
                  Nos chefs maîtrisent l'art du grillage et il est temps pour
                  vous d'en profiter.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisGrillades.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 11 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Plats
                </h2>
                <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Prenez un repas bien équilibré avec nos assiettes
                  satisfaisantes, pleines d'ingrédients frais.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisPlats.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 12 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Manakish Et Kaak
                </h2>
                <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Le manakish et le Kaak sont un célèbre pain plat du
                  Moyen-Orient, garni de za'atar, de fromage et d'autres
                  délices. Notre carte vous fera découvrir ces délicieuses
                  spécialités libanaises.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisManakishEtKaak.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : nav === 13 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Sushi
                </h2>
                <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <nav className="mx-0 px-0 flex flex-row flex-wrap md:justify-center align-center gap-2 md:gap-3 px-2 md:px-5 text-center text-xs md:text-XS py-5">
                  <button
                    onClick={() => setSushiNav(1)}
                    className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-800 ${
                      sushiNav === 1
                        ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
                        : "border-none"
                    }`}
                  >
                    Negiri
                  </button>
                  <button
                    onClick={() => setSushiNav(2)}
                    className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-800 ${
                      sushiNav === 2
                        ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
                        : "border-none"
                    }`}
                  >
                    Entrees Et Salades
                  </button>
                  <button
                    onClick={() => setSushiNav(3)}
                    className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-800 ${
                      sushiNav === 3
                        ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
                        : "border-none"
                    }`}
                  >
                    Maki Rolls
                  </button>
                  <button
                    onClick={() => setSushiNav(4)}
                    className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-800 ${
                      sushiNav === 4
                        ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
                        : "border-none"
                    }`}
                  >
                    Le Palais Rolls
                  </button>
                  <button
                    onClick={() => setSushiNav(5)}
                    className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-800 ${
                      sushiNav === 5
                        ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
                        : "border-none"
                    }`}
                  >
                    Sashimi
                  </button>
                  <button
                    onClick={() => setSushiNav(6)}
                    className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-800 ${
                      sushiNav === 6
                        ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
                        : "border-none"
                    }`}
                  >
                    Chef Signatures Rolls
                  </button>
                  <button
                    onClick={() => setSushiNav(7)}
                    className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-800 ${
                      sushiNav === 7
                        ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
                        : "border-none"
                    }`}
                  >
                    Les Plateaux
                  </button>
                </nav>
              </div>
            </div>
            {sushiNav === 1 ? (
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSushiNegiri.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-xs h-[300px] rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white opacity-100">
                                {item.ingredient}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : sushiNav === 2 ? (
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSushiEntreesEtSalades.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-xs h-[300px] rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white opacity-100">
                                {item.ingredient}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : sushiNav === 3 ? (
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSushiMakiRolls.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-xs h-[300px] rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white opacity-100">
                                {item.ingredient}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : sushiNav === 4 ? (
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSushiLePalaisRolls.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-xs h-[300px] rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white opacity-100">
                                {item.ingredient}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : sushiNav === 5 ? (
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSushiSashimi.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-xs h-[300px] rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white opacity-100">
                                {item.ingredient}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : sushiNav === 6 ? (
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSushiChefSignaturesRolls.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-xs h-[300px] rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white opacity-100">
                                {item.ingredient}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : sushiNav === 7 ? (
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSushiLesPlateaux.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-xs h-[300px] rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white opacity-100">
                                {item.ingredient}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : null}
          </div>
        </div>
      ) : nav === 14 ? (
        <div className="bg-[#262527] py-16">
          <div className="md:mx-10">
            <div className="mx-10 pb-10 text-white">
              <div className="flex flex-row justify-between align-center items-center">
                <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                  Desserts
                </h2>
                {/* <div>
                  <a
                    href="https://menu.omegasoftware.ca/lepalais1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                    >
                      delivery menu
                    </button>
                  </a>
                </div> */}
              </div>
              <div>
                <div className="text-xs pr-0 md:pr-60 pt-5">
                  Notre carte des desserts est là pour vous offrir le parfait
                  terminer votre repas.
                </div>
              </div>
            </div>
            <div className="">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                // keyBoardControl={true}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {palaisDesserts.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ backgroundPosition: "50%" }}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <div className="flex flex-col px-2 justify-center items-center h-full">
                            <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                              {item.name}
                            </h2>
                            <p className="text-white opacity-100">
                              {item.ingredient}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      ;{/* Maps & contact */}
      <div className="my-10">
        <div className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Dernières offres
        </div>
        <PalaisSnackOffer
          title="Pourquoi c'est si génial?"
          description="latest offer latest offer. latest offer latest offer
          latest offer latest. latest offer latest offer, latest offer latest offer latest. latest offer latest."
          src1="https://i.ibb.co/p46Brs0/Le-Palais-Future-Offre.png"
        />
      </div>
      <div className="">
        <div className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Notre Contact
        </div>
        <RestaurantsMaps
          src1="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15913.734604197723!2d15.2733285!3d-4.329369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbdb935e1cc4340f!2sLe%20Palais!5e0!3m2!1sen!2scd!4v1673626795800!5m2!1sen!2scd"
          email="lepalaisrestaurant@gmail.com"
          phone1="+243-999-999-999"
          phone2="+243-999-999-999"
          phone3="+243-999-999-999"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Lepalais;
