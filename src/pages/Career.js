import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Career = () => {
  return (
    <div className="flex flex-col content-between">
      <NavBar />
      <div>
        <section className="mb-40">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: "50%",
              backgroundImage:
                "url('https://mdbootstrap.com/img/new/textures/full/142.jpg')",
              height: "500px",
            }}
          ></div>

          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center text-gray-800">
              <div
                className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
                style={{
                  marginTop: "-170px",
                  background: "hsla(0, 0%, 100%, 0.7)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <h1 className="text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12 capitalize">
                  Rejoins notre équipe <br />
                  <span className="text-blue-600">
                    Explorez un monde d'opportunités
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>career page</div>
      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            Card title
          </h5>
          <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
