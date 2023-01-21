import React from "react";
import { Link } from "react-router-dom";

function GridRestaurants() {
  return (
    <div className="mb-10 main px-2 md:px-2 py-10 md:py-10 justify-evenly flex flex-col md:flex-row md:flex-wrap gap-x-8 gap-y-8 md:gap-x-0 md:gap-y-8">
      {/* first */}
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/89XVWtw/pexels-photo-1307698-1.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Le Palais
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
      {/* second */}
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Palais Snack
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
      {/* third */}
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Circle De Palais
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
      {/* fourth */}
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-lg">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Royal Burger
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
  );
}

export default GridRestaurants;
