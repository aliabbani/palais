import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineDeliveryDining, MdWifiCalling } from "react-icons/md";
import Trial from "../assets/images/image-trial.jpg";
import Batonet from "../assets/images/batonet-mozerella.jpg";
import {
  palaisSnackMenuAmuseBouche,
  palaisSnackSalades,
  palaisSandwiches,
} from "../data";

const PalaisSnack = () => {
  console.log("palaisSnackMenuAmuseBouche", palaisSnackMenuAmuseBouche);
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
      {/* <div>Palais Snack</div> */}
      <div className="text-center pt-5 md:pt-1">
        <Link to="https://menu.omegasoftware.ca/lepalais1">
          <button
            type="button"
            className="md:hidden inline-block px-16 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            delivery menu
          </button>
        </Link>
      </div>
      {/* menu nav */}
      <ul
        className="nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-2 px-0 md:px-20"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-amuse"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
            id="tabs-amuse-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-amuse"
            role="tab"
            aria-controls="tabs-amuse"
            aria-selected="true"
          >
            AMUSE BOUCHE
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-salades"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-salades-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-salades"
            role="tab"
            aria-controls="tabs-salades"
            aria-selected="false"
          >
            SALADES
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-sandwiches"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-sandwiches-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-sandwiches"
            role="tab"
            aria-controls="tabs-sandwiches"
            aria-selected="false"
          >
            SANDWICHES
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-burgers"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-burgers-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-burgers"
            role="tab"
            aria-controls="tabs-burgers"
            aria-selected="false"
          >
            BURGERS
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-mezzesFroids"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-mezzesFroids-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-mezzesFroids"
            role="tab"
            aria-controls="tabs-mezzesFroids"
            aria-selected="false"
          >
            MEZZES FROIDS
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-mezzesFroids"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-mezzesChaux-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-mezzesChaux"
            role="tab"
            aria-controls="tabs-mezzesChaux"
            aria-selected="false"
          >
            MEZZES CHAUX
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-shawarma"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-shawarma-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-shawarma"
            role="tab"
            aria-controls="tabs-shawarma"
            aria-selected="false"
          >
            SHAWARMA
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-grillades"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-grillades-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-grillades"
            role="tab"
            aria-controls="tabs-grillades"
            aria-selected="false"
          >
            GRILLADES
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-broastedEtCrispy"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-broastedEtCrispy-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-broastedEtCrispy"
            role="tab"
            aria-controls="tabs-broastedEtCrispy"
            aria-selected="false"
          >
            BROASTED ET CRISPY
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-petitDejeuner"
            className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-2 border-b-2 border-transparent px-1 md:px-3 py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-petitDejeuner-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-petitDejeuner"
            role="tab"
            aria-controls="tabs-petitDejeuner"
            aria-selected="false"
          >
            PETIT DEJEUNER
          </a>
        </li>
      </ul>
      {/* menu images items */}
      <div className="tab-content" id="tabs-tabContent">
        <div
          className="tab-pane fade show active bg-[#262527] py-16"
          id="tabs-amuse"
          role="tabpanel"
          aria-labelledby="tabs-amuse-tab"
        >
          <div className="mx-10">
            <div className="mx-2 pb-10 text-white flex flex-row justify-between align-center items-center">
              <div>menu</div>
              <div>
                <Link to="https://menu.omegasoftware.ca/lepalais1">
                  <button
                    type="button"
                    className="inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    delivery menu
                  </button>
                </Link>
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
                    <div className="">
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ "background-position": "50%" }}
                      >
                        <img
                          src="https://i.ibb.co/f8VFxjP/batonet-mozerella.jpg"
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{ "background-color": "rgba(0,0,0,0.6)" }}
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
        <div
          className="tab-pane fade show active bg-[#262527] py-16"
          id="tabs-salades"
          role="tabpanel"
          aria-labelledby="tabs-salades-tab"
        >
          <div className="mx-10">
            <div className="mx-2 pb-10 text-white flex flex-row justify-between align-center items-center">
              <div>menu</div>
              <div>
                <Link to="https://menu.omegasoftware.ca/lepalais1">
                  <button
                    type="button"
                    className="inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    delivery menu
                  </button>
                </Link>
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
                    <div className="">
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ "background-position": "50%" }}
                      >
                        <img
                          src="https://i.ibb.co/k1V3Gnc/download-1.jpg"
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{ "background-color": "rgba(0,0,0,0.6)" }}
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
        <div
          className="tab-pane fade show active bg-[#262527] py-16"
          id="tabs-sandwiches"
          role="tabpanel"
          aria-labelledby="tabs-sandwiches-tab"
        >
          <div className="mx-10">
            <div className="mx-2 pb-10 text-white flex flex-row justify-between align-center items-center">
              <div>menu</div>
              <div>
                <Link to="https://menu.omegasoftware.ca/lepalais1">
                  <button
                    type="button"
                    className="inline-block px-10 py-4 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    delivery menu
                  </button>
                </Link>
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
                    <div className="">
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
                        style={{ "background-position": "50%" }}
                      >
                        <img
                          src="https://i.ibb.co/xmPVgrN/chicken-fajita-sandwich.jpg"
                          className="w-max-xs h-[300px] rounded"
                        />
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{ "background-color": "rgba(0,0,0,0.6)" }}
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
        <div
          className="tab-pane fade"
          id="tabs-burgers"
          role="tabpanel"
          aria-labelledby="tabs-burgers-tab"
        >
          Tab 4 content
        </div>
        <div
          className="tab-pane fade"
          id="tabs-mezzesFroids"
          role="tabpanel"
          aria-labelledby="tabs-mezzesFroids-tab"
        >
          Tab 5 content
        </div>
        <div
          className="tab-pane fade"
          id="tabs-mezzesChaux"
          role="tabpanel"
          aria-labelledby="tabs-mezzesChaux-tab"
        >
          Tab 6 content
        </div>
        <div
          className="tab-pane fade"
          id="tabs-shawarma"
          role="tabpanel"
          aria-labelledby="tabs-shawarma-tab"
        >
          Tab 7 content
        </div>
        <div
          className="tab-pane fade"
          id="tabs-grillades"
          role="tabpanel"
          aria-labelledby="tabs-grillades-tab"
        >
          Tab 8 content
        </div>
        <div
          className="tab-pane fade"
          id="tabs-broastedEtCrispy"
          role="tabpanel"
          aria-labelledby="tabs-broastedEtCrispy-tab"
        >
          Tab 9 content
        </div>
        <div
          className="tab-pane fade"
          id="tabs-petitDejeuner"
          role="tabpanel"
          aria-labelledby="tabs-petitDejeuner-tab"
        >
          Tab 10 content
        </div>
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
                    allowfullscreen
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
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

{
  /* multy slide */
}
{
  /* <div className="mx-10">
  <div>menu</div>
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
      <div className="border border-black">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
          style={{ "background-position": "50%" }}
        >
          <img src={Trial} className="w-max-xs h-[300px]" />
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
            style={{ "background-color": "rgba(0,0,0,0.6)" }}
          >
            <div className="flex flex-col px-2 justify-center items-center h-full">
              <h2 className="text-white opacity-100">Can you see me?</h2>
              <p className="text-white opacity-100">
                pomme de terre, crème aigre doux, bbq sauce, sauce cocktail
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-yellow-500">Item 2</div>
      <div className="border border-black">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover w-max-xs h-[300px]"
          style={{ "background-position": "50%" }}
        >
          <img src={Batonet} className="w-max-xs h-[300px]" />
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
            style={{ "background-color": "rgba(0,0,0,0.6)" }}
          >
            <div className="flex flex-col px-2 justify-center items-center h-full">
              <h2 className="text-white opacity-100">Batonnet De Mozzarella</h2>
              <p className="text-white opacity-100">
                5 pièces mozzarella pané, sauce cocktail
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-blue-300">Item 4</div>
      <div className="border border-yellow-500">Item 5</div>
      <div className="border border-blue-300">Item 6</div>
      <div className="border border-red-200">Item 7</div>
      <div className="border border-green-600">Item 8</div>
      <div className="border border-black">Item 9</div>
      <div className="border border-yellow-500">Item 10</div>
    </Carousel>
  </div>
</div>; */
}
