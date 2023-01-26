import React from "react";
import { Link } from "react-router-dom";

function GridRestaurants() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="mb-10 main px-2 md:px-2 py-10 md:py-10 justify-evenly flex flex-col md:flex-row md:flex-wrap gap-x-8 gap-y-8 md:gap-x-0 md:gap-y-8">
      {/* first */}
      <div className="flex justify-center" onClick={scrollToTop}>
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <Link to="/lepalais">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/89XVWtw/pexels-photo-1307698-1.jpg"
              alt=""
            />
          </Link>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Le Palais
            </h5>
            <p className="text-gray-700 text-base mb-4">
              The Palais formula has ensured success with its Lebanese Mezze,
              its tasty main dishes accompanied by its famous sauce, and its
              fine and golden sushi.
            </p>
            <div>
              <Link to="/lepalais">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="flex justify-center" onClick={scrollToTop}>
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <Link to="/palaissnack">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/3RV1K97/restaurant33.png"
              alt=""
            />
          </Link>
          <div className="p-6 flex flex-col content-between justify-between">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Palais Snack
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Le Palais Snack, the Lebanese international fast-food restaurant.
            </p>
            <div>
              <Link to="/palaissnack">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="flex justify-center" onClick={scrollToTop}>
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <Link to="/circledepalais">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/30cnGGQ/restaurant22.png"
              alt=""
            />
          </Link>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Circle De Palais
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick description text Some quick description text Some quick
              description text Some quick description text.
            </p>
            <div>
              <Link to="/circledepalais">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="flex justify-center" onClick={scrollToTop}>
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <Link to="/royalburger">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/N9CSXJY/restaurant44-2.png"
              alt=""
            />
          </Link>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Royal Burger
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick description text Some quick description text Some quick
              description text Some quick description text.
            </p>
            <div>
              <Link to="/royalburger">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition-property duration-150 ease-in-out"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridRestaurants;
