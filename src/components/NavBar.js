import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiTwotonePhone } from "react-icons/ai";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);

  return (
    <nav className="flex flex-row w-full justify-between bg-[#272a31]">
      <div className="flex flex-row justify-between items-center text-white uppercase p-4 lg:p-5 w-full lg:w-max">
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
          <div className="text-black bg-silver shadow-lg p-5 bg-stone-200 flex flex-row justify-between items-center">
            <div className="uppercase cursor-pointer">Palais</div>
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <div className="h-full items-start p-14 gap-8 bg-white text-white uppercase flex flex-col text-black font-semibold text-xl">
            {/* <Link to="/"> */}
            <div>
              <div className="flex flex-row items-baseline justify-between">
                <div
                  className="cursor-pointer"
                  onClick={() => setShowRestaurants(!showRestaurants)}
                >
                  restaurants
                </div>
                {showRestaurants ? (
                  <div className="pl-2 cursor-pointer">
                    <AiOutlineMinus onClick={() => setShowRestaurants(false)} />
                  </div>
                ) : (
                  <div className="pl-2 cursor-pointer">
                    <AiOutlinePlus onClick={() => setShowRestaurants(true)} />
                  </div>
                )}
              </div>
              {showRestaurants && (
                <div className="text-base pt-4 capitalize text-gray-600 flex flex-col items-start pl-6 cursor-pointer">
                  <Link to="/lepalais">
                    <div>Le Palais</div>
                  </Link>
                  <Link to="/palaissnack">
                    <div>Palais Snack</div>
                  </Link>
                  <Link to="/circledepalais">
                    <div>Le Cercle</div>
                  </Link>
                  <Link to="/royalburger">
                    <div>Royal Burger</div>
                  </Link>
                </div>
              )}
            </div>
            {/* </Link> */}
            <Link to="/brand">
              <div>marque</div>
            </Link>
            <Link to="/loyality">
              <div>Carte Palais Club</div>
            </Link>
            <Link to="/career">
              <div>carri??res</div>
            </Link>

            <Link to="/contact">
              <div>contact</div>
            </Link>
            <Link to="/palaisforbusiness">
              <div>Palais des affaires</div>
            </Link>
            <button className="text-yellow-700">
              <a href="tel:1027" className="flex flex-row gap-1 items-baseline">
                <div>
                  <AiTwotonePhone />
                </div>
                <div>1027</div>
              </a>
            </button>
          </div>
        </div>
      ) : (
        // desktop
        <div className="hidden lg:flex flex-row justify-between items-center bg-[#272a31] py-4 px-4">
          <div className="flex md:gap-5 lg:gap-10 text-white">
            {/* <Link to="/"> */}
            <div className="dropdown relative">
              <button
                className="capitalize dropdown-toggle px-0 py-2.5 bg-[#272a31] flex items-center whitespace-nowrap"
                type="button"
                id="dropdownMenuButton10"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Restaurants
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton10"
              >
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="/lepalais"
                  >
                    Le Palais
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="/palaissnack"
                  >
                    Palais Snack
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="/circledepalais"
                  >
                    Le Cercle
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="/royalburger"
                  >
                    Royal Burger
                  </a>
                </li>
              </ul>
            </div>
            {/* </Link> */}

            <button className="capitalize">
              <Link to="/brand">marque </Link>
            </button>

            <button className="capitalize">
              <Link to="/loyality">Carte Palais Club</Link>
            </button>

            <button className="capitalize">
              <Link to="/career">carri??res</Link>
            </button>

            <button className="capitalize">
              <Link to="/contact">contact</Link>
            </button>

            <button className="capitalize">
              <Link to="/palaisforbusiness">Palais des affaires</Link>
            </button>

            <button className="text-yellow-700">
              <a href="tel:1027" className="flex flex-row gap-1 items-baseline">
                <div>
                  <AiTwotonePhone />
                </div>
                <div>1027</div>
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
