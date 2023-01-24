import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircleFood, CircleDesserts, ComingSoon } from "../dataPalaisCircle";
import RestaurantsSlider from "../components/RestaurantsSlider";
import PalaisSnackOffer from "../components/PalaisSnackOffer";
import { MdWifiCalling } from "react-icons/md";

const CircleDePalais = () => {
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
      {/* w:1600 h:707 */}
      <RestaurantsSlider
        src1="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        src2="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        src3="https://i.ibb.co/HGj7Pqz/football-court.png"
      />

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
          Menu Temporaire
        </button>
        <button
          onClick={() => setNav(2)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 2
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          Desserts
        </button>
        <button
          // onClick={() => setNav(3)}
          className={`font-medium leading-tight uppercase py-2 px-1 hover:bg-gray-100 ${
            nav === 3
              ? "border-x-0 border-t-2 border-b-2 border-yellow-500 "
              : "border-none"
          }`}
        >
          Bientôt disponible
        </button>
      </nav>
      {/* menu images items */}
      <div className="">
        {/* amouse bouche carousel */}
        {nav === 1 ? (
          <div className="bg-[#262527] py-16">
            <div className="md:mx-10">
              <div className="mx-10 pb-10 text-white">
                <div className="flex flex-row justify-between align-center items-center">
                  <h2 className="uppercase font-medium leading-tight text-xl md:text-4xl">
                    Food Menu
                  </h2>
                  <div></div>
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
                  {CircleFood.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-[320px] max-h-80"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="rounded w-max-[320px] max-h-80"
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
                  {CircleDesserts.map((item, index) => {
                    return (
                      <div className="" key={index}>
                        <div
                          className="relative overflow-hidden bg-no-repeat bg-cover w-max-[320px] max-h-80"
                          style={{ backgroundPosition: "50%" }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-max-[320px] max-h-80 rounded"
                          />
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-property duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                          >
                            <div className="flex flex-col px-2 justify-center items-center h-full">
                              <h2 className="text-white text-lg font-semibold uppercase opacity-100">
                                {item.name}
                              </h2>
                              <p className="text-white text-base font-medium opacity-100">
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
      <div>
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center lg:text-left background-radial-gradient">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                // image size w:780 h:520,
                backgroundImage: "url('https://i.ibb.co/hB3N31w/pool.png')",
                height: "520px",
              }}
            >
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex justify-center items-center h-full">
                  <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                    <h2 className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-12">
                      Êtes-vous prêt
                      <br />
                      <span>pour notre piscine </span>
                    </h2>
                    <p className="text-lg mb-12">
                      Êtes-vous prêt sit pour notre piscine elit. Êtes-vous prêt
                      sit pour notre piscine elit Êtes-vous prêt sit pour notre
                      piscine elit.
                    </p>
                    <a href="#contact">
                      <button className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out">
                        Reserve Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center lg:text-left background-radial-gradient">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                // image size w:780 h:520,
                backgroundImage: "url('https://i.ibb.co/5Bt6z3t/football.png')",
                height: "520px",
              }}
            >
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex justify-center items-center h-full">
                  <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                    <h2 className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-12">
                      Êtes-vous prêt
                      <br />
                      <span>pour notre terrain de football </span>
                    </h2>
                    <p className="text-lg mb-12">
                      Êtes-vous prêt pour notre terrain de football. Êtes-vous
                      prêt pour notre terrain de football Êtes-vous prêt pour
                      notre terrain de football.
                    </p>
                    <a href="#contact">
                      <button className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out">
                        Reserve Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="my-10">
        <div className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Latest Offers
        </div>
        <PalaisSnackOffer
          title="Why is it so great?"
          description="latest offer latest offer. latest offer latest offer
          latest offer latest. latest offer latest offer, latest offer latest offer latest. latest offer latest."
          src1="https://i.ibb.co/qMzwPB0/Le-Circle-Future-Offre.png"
        />
      </div>
      {/* Maps & contact */}
      <div className="" id="contact">
        <div className="text-center capitalize text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Our Contact
        </div>

        <div className="container my-12 px-6 mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="block rounded-lg shadow-lg bg-white">
              <div className="flex flex-wrap items-center">
                <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                  <div className="map-container-2 h-[500px] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4023626092867!2d15.248516914120705!3d-4.335316947771861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a315533d6ff59%3A0xeef95f9e7d568613!2sCercle%20Libanais!5e0!3m2!1sen!2scd!4v1674583896701!5m2!1sen!2scd"
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
                  <div className="flex flex-wrap justify-center pt-12 lg:pt-0">
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
                          <p className="text-gray-500">lecircle@gmail.com"</p>
                          <p className="text-gray-500">+243-999-999-999</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CircleDePalais;
