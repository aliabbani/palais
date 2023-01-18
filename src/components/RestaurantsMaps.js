import React from "react";
import { MdOutlineDeliveryDining, MdWifiCalling } from "react-icons/md";

const RestaurantsMaps = (props) => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
              <div className="map-container-2 h-[500px] w-full">
                <iframe
                  src={props.src1}
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
                      <p className="font-bold mb-1">Reservation & Enquiries</p>
                      <p className="text-gray-500">{props.email}</p>
                      <p className="text-gray-500">{props.phone1}</p>
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
                      <p className="text-gray-500">{props.phone2}</p>
                      <p className="text-gray-500">{props.phone3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantsMaps;
