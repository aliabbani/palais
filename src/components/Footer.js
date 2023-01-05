import React from "react";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#272a31] h-24 md:pt-0 flex flex-col md:flex-row md:justify-between md:items-center text-[#d3d3d3] px-5 md:px-10">
      <div className="text-sm md:text-base py-3 md:py-0">
        © 2023 Le Palais Restaurants | All Rights Reserved | Developed By Ali
      </div>
      <div className="flex md:justify-between">
        <a
          className="pr-4 md:pr-6"
          href="https://web.facebook.com/LePalaisRestaurantKinshasa/?_rdc=1&_rdr"
        >
          <GrFacebookOption />
        </a>
        <a href="https://www.instagram.com/lepalaisrestaurant/?hl=en">
          <GrInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
