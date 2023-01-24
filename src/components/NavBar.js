import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="flex flex-row w-full justify-between bg-[#272a31]">
      <div className="flex flex-row justify-between items-center text-white uppercase p-6 w-full lg:w-max">
        <Link to="/">
          <div>Palais</div>
        </Link>
        <AiOutlineMenu
          className={`flex lg:hidden text-4xl text-white hover:text-yellow-600 cursor-pointer transition-property ease transform duration-300
          ${showMenu ? "rotate-180 translate-y-3" : ""}`}
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu ? (
        // mobile
        <div className="z-50 w-full h-full absolute top-0 left-0 overflow-scroll">
          <div className="text-black bg-silver p-6 bg-stone-200 flex flex-row justify-between items-center">
            <div className="uppercase cursor-pointer">Palais</div>
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <div className="items-center justify-center gap-5 bg-white text-white uppercase h-full flex flex-col text-black font-semibold text-lg">
            <Link to="/">
              <div>restaurants</div>
            </Link>
            <Link to="/brand">
              <div>brand</div>
            </Link>
            <Link to="/loyality">
              <div>Palais club card</div>
            </Link>
            <div>careers</div>
            <Link to="/contact">
              <div>contact</div>
            </Link>
            <Link to="/palaisforbusiness">
              <div>Palais for business</div>
            </Link>
          </div>
        </div>
      ) : (
        // desktop
        <div className="hidden lg:flex flex-row justify-between items-center bg-[#272a31] py-7 px-4">
          <div className="flex md:gap-5 lg:gap-10 text-white uppercase">
            <Link to="/">
              <div>restaurants</div>
            </Link>
            <Link to="/brand">
              <div>brand</div>
            </Link>
            <Link to="/loyality">
              <div>Palais club card</div>
            </Link>
            <div>careers</div>
            <Link to="/contact">
              <div>contact</div>
            </Link>
            <Link to="/palaisforbusiness">
              <div>Palais for business</div>
            </Link>
            <div className="text-yellow-700">+243 999</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
