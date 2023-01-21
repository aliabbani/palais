import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  palaisSnackMenuAmuseBouche,
  palaisSnackSalades,
  palaisSnackSandwiches,
  palaisSnackBurgers,
  palaisSnackMezzesFroids,
  palaisSnackMezzesChauds,
  palaisSnackShawarma,
  palaisSnackGrillades,
  palaisSnackBroasted,
  palaisSnackPetitDejeuner,
} from "../data";
import RestaurantsSlider from "../components/RestaurantsSlider";
import RestaurantsMaps from "../components/RestaurantsMaps";
import PalaisSnackOffer from "../components/PalaisSnackOffer";

const PalaisSnack = () => {
  const [nav, setNav] = useState(1);
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
        src1="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        src2="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        src3="https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
      />

      <div className="text-center pt-5 md:pt-1">
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
      </div>

      {/* menu nav */}
      <nav className="flex flex-row flex-wrap md:justify-center align-center gap-2 md:gap-5 px-2 md:px-10 text-center text-xs md:text-sm py-5">
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
          SANDWICHES
        </button>
        <button
          onClick={() => setNav(4)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 4
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          BURGERS
        </button>
        <button
          onClick={() => setNav(5)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 5
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          MEZZES FROIDS
        </button>
        <button
          onClick={() => setNav(6)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 6
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          MEZZES CHAUDS
        </button>
        <button
          onClick={() => setNav(7)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 7
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          SHAWARMA
        </button>
        <button
          onClick={() => setNav(8)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 8
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          GRILLADES
        </button>
        <button
          onClick={() => setNav(9)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 9
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          BROASTED ET CRISPY
        </button>
        <button
          onClick={() => setNav(10)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 10
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          PETIT DEJEUNER
        </button>
      </nav>
      {/* menu images items */}
      <div className="">
        {/* amouse bouche carousel */}
        {nav === 1 ? (
          <div className="bg-[#262527] py-16">
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
                <div className="flex flex-row justify-between align-center items-center">
                  <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                    Amuse Bouche
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
                    Market fresh salads made with only the best vegetables of
                    the bunch, carefully selected every day.<br></br>
                    Mix and match as you like from our list of homemade
                    dressings: • Oil & lemon • Creamy lemon • Balsamic vinegar •
                    Sesame balsamic • Basil vinaigrette • Home-style lemon •
                    Mustard lemon • Cuban • Caesar • Light vinegar
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={true}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackMenuAmuseBouche.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
                <div className="flex flex-row justify-between align-center items-center">
                  <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                    Salades
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
                    Market fresh salads made with only the best vegetables of
                    the bunch, carefully selected every day.<br></br>
                    Mix and match as you like from our list of homemade
                    dressings: • Oil & lemon • Creamy lemon • Balsamic vinegar •
                    Sesame balsamic • Basil vinaigrette • Home-style lemon •
                    Mustard lemon • Cuban • Caesar • Light vinegar
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackSalades.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
                <div className="flex flex-row justify-between align-center items-center">
                  <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                    Sandwiches
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
                    Market fresh salads made with only the best vegetables of
                    the bunch, carefully selected every day.<br></br>
                    Mix and match as you like from our list of homemade
                    dressings: • Oil & lemon • Creamy lemon • Balsamic vinegar •
                    Sesame balsamic • Basil vinaigrette • Home-style lemon •
                    Mustard lemon • Cuban • Caesar • Light vinegar
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackSandwiches.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
                <div className="flex flex-row justify-between align-center items-center">
                  <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                    Burgers
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
                    You’re in for a divine experience with our premium
                    cooked-to-order burgers.
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackBurgers.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
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
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo.
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackMezzesFroids.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
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
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo.
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackMezzesChauds.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
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
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo.
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackShawarma.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
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
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo.
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackGrillades.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
                <div className="flex flex-row justify-between align-center items-center">
                  <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                    Broasted
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
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo.
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackBroasted.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
            <div className="mx-10">
              <div className="mx-2 pb-10 text-white">
                <div className="flex flex-row justify-between align-center items-center">
                  <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                    Petit De jeuner
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
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo.
                  </div>
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  ssr={true}
                  infinite={true}
                  // keyBoardControl={true}
                  containerclassName="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListclassName="custom-dot-list-style"
                  itemclassName="carousel-item-padding-40-px"
                >
                  {palaisSnackPetitDejeuner.map((item, index) => {
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
                              <h2 className="text-white opacity-100">
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
      </div>
      {/* latest offers */}
      <div className="my-10">
        <div className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Latest Offers
        </div>
        <PalaisSnackOffer
          title="Why is it so great?"
          description="Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam."
          src1="https://i.ibb.co/QQzmZff/15-discount.jpg"
        />
      </div>
      {/* Maps & contact */}
      <div className="">
        <div className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Our Contact
        </div>
        <RestaurantsMaps
          src1="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.32452895858546!2d15.3113547!3d-4.2983301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a330641c56e55%3A0x601ebf4d2e79c8f7!2sLe%20Palais%201%20Restaurant%20CTC!5e0!3m2!1sen!2scd!4v1673478785405!5m2!1sen!2scd"
          email="lepalais1restaurant@gmail.com"
          phone1="+243-907-626-431"
          phone2="+234-999-444-333"
          phone3="+234-999-555-333"
        />
      </div>

      <Footer />
    </div>
  );
};

export default PalaisSnack;
