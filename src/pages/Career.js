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
                <h1 className="text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12">
                  Join Our Team <br />
                  <span className="text-blue-600">
                    Explore a world of opportunities
                  </span>
                </h1>
                <a
                  className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>career page</div>
      <Footer />
    </div>
  );
};

export default Career;
