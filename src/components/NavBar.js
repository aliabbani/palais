import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
      <nav className="flex flex-row w-full justify-between bg-black">
        <div className="flex flex-row justify-between items-center text-white uppercase p-6 w-full md:w-max">
          <div>Palais</div>
          <AiOutlineMenu
            className="flex md:hidden text-2xl text-yellow-600"
            onClick={() => setShowMenu(true)}
          />
        </div>
        {showMenu ? (
          // mobile
          <div className="z-50 bg-white w-full h-full absolute top-0 left-0 overflow-scroll">
            <div className="text-black bg-silver p-6 bg-stone-200 flex flex-row justify-between items-center ">
              <div className="uppercase">Palais</div>
              <AiOutlineClose
                className="text-2xl"
                onClick={() => setShowMenu(false)}
              />
            </div>
            <div className="items-center justify-evenly opacity-95 text-white uppercase h-full flex flex-col text-black">
              <Link to="brand">
                <div>brand</div>
              </Link>
              <div>restaurants</div>
              <div>loyality card</div>
              <div>careers</div>
              <div>contact</div>
              <a href="https://menu.omegasoftware.ca/lepalais1">menu</a>
            </div>
          </div>
        ) : (
          // desktop
          <div className="hidden md:flex flex-row justify-between items-center bg-black py-7 px-4">
            <div className="flex md:gap-5 lg:gap-10 text-white uppercase">
              <Link to="brand">
                <div>brand</div>
              </Link>
              <div>restaurants</div>
              <Link to="loyality">
                <div>loyality card</div>
              </Link>
              <div>careers</div>
              <div>contact</div>
              <a href="https://menu.omegasoftware.ca/lepalais1">Menu</a>
              <div className="text-yellow-700">+243 999</div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
