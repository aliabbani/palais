import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineDeliveryDining, MdWifiCalling } from "react-icons/md";
import {
  palaisSnackMenuAmuseBouche,
  palaisSnackSalades,
  palaisSandwiches,
  palaisSnackBurgers,
  palaisSnackMezzesFroids,
  palaisSnackMezzesChauds,
  palaisSnackShawarma,
  palaisSnackGrillades,
  palaisSnackBroasted,
  palaisSnackPetitDejeuner,
} from "../data";

const PalaisSnack = () => {
  const [nav, setNav] = useState(1);
  console.log("nav", nav);
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
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="Camera"
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>

      <div className="text-center pt-5 md:pt-1">
        <a href="https://menu.omegasoftware.ca/lepalais1" target="_blank">
          <button
            href="https://menu.omegasoftware.ca/lepalais1"
            type="button"
            className="md:hidden inline-block px-16 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
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
            nav == 1
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          AMUSE BOUCHE
        </button>
        <button
          onClick={() => setNav(2)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 2
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          SALADES
        </button>
        <button
          onClick={() => setNav(3)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 3
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          SANDWICHES
        </button>
        <button
          onClick={() => setNav(4)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 4
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          BURGERS
        </button>
        <button
          onClick={() => setNav(5)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 5
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          MEZZES FROIDS
        </button>
        <button
          onClick={() => setNav(6)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 6
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          MEZZES CHAUDS
        </button>
        <button
          onClick={() => setNav(7)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 7
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          SHAWARMA
        </button>
        <button
          onClick={() => setNav(8)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 8
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          GRILLADES
        </button>
        <button
          onClick={() => setNav(9)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 9
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          BROASTED ET CRISPY
        </button>
        <button
          onClick={() => setNav(10)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav == 10
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
        {nav == 1 ? (
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
                    >
                      <button
                        type="button"
                        className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
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
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
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
        ) : nav == 2 ? (
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
                    >
                      <button
                        type="button"
                        className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
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
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
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
        ) : nav == 3 ? (
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
                    >
                      <button
                        type="button"
                        className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
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
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
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
        ) : nav == 4 ? (
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
                    >
                      <button
                        type="button"
                        className="hidden md:inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
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
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
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
        ) : nav == 5 ? (
          <div className="">Tab 5 content</div>
        ) : nav == 6 ? (
          <div className="">Tab 6 content</div>
        ) : nav == 7 ? (
          <div className="">Tab 7 content</div>
        ) : nav == 8 ? (
          <div className="">Tab 8 content</div>
        ) : nav == 9 ? (
          <div className="">Tab 9 content</div>
        ) : nav == 10 ? (
          <div className="">Tab 10 content</div>
        ) : (
          <div></div>
        )}
      </div>

      {/* Maps & contact */}
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div className="map-container-2 h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.32452895858546!2d15.3113547!3d-4.2983301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a330641c56e55%3A0x601ebf4d2e79c8f7!2sLe%20Palais%201%20Restaurant%20CTC!5e0!3m2!1sen!2scd!4v1673478785405!5m2!1sen!2scd"
                    allowFullScreen
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    alt=""
                    title="title"
                  ></iframe>
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="flex flex-wrap pt-12 lg:pt-0">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center text-white text-4xl">
                          <MdWifiCalling />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">
                          Reservation & Enquiries
                        </p>
                        <p className="text-gray-500">
                          lepalais1restaurant@gmail.com
                        </p>
                        <p className="text-gray-500">+243-907-626-431</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center text-white text-4xl">
                          <MdOutlineDeliveryDining />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Delivery Order</p>
                        <p className="text-gray-500">+234-999-444-333</p>
                        <p className="text-gray-500">+234-999-555-333</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PalaisSnack;
