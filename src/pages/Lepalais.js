import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineDeliveryDining, MdWifiCalling } from "react-icons/md";

const Lepalais = () => {
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
      <div className="mx-10">
        <div>menu</div>
        <div className="">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            ssr={true}
            infinite={true}
            // keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="border border-black">Item 1</div>
            <div className="border border-yellow-500">Item 2</div>
            <div className="border border-red-200">Item 3</div>
            <div className="border border-blue-300">Item 4</div>
            <div className="border border-yellow-500">Item 5</div>
            <div className="border border-blue-300">Item 6</div>
            <div className="border border-red-200">Item 7</div>
            <div className="border border-green-600">Item 8</div>
            <div className="border border-black">Item 9</div>
            <div className="border border-yellow-500">Item 10</div>
          </Carousel>
        </div>
      </div>
      ;{/* Maps & contact */}
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div className="map-container-2 h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15913.734604197723!2d15.2733285!3d-4.329369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbdb935e1cc4340f!2sLe%20Palais!5e0!3m2!1sen!2scd!4v1673626795800!5m2!1sen!2scd"
                    allowfullscreen
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
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

export default Lepalais;
