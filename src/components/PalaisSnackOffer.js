import React from "react";

const PalaisSnackOffer = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="sectionPalaisSnackOffer mb-32 text-gray-800 text-center lg:text-left">
        <div className="md:px-6 py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div
                  className="relative block rounded-lg shadow-lg px-6 pt-12 pb-6 md:px-12 lg:-mr-14"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    "backdrop-filter": "blur(30px)",
                    "z-index": "1",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    Why is it so great?
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>

                  <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-2">
                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Fast Delivery
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex ">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Best Quality
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Original Taste
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <img
                  src="https://i.ibb.co/QQzmZff/15-discount.jpg"
                  className="w-full rounded-lg shadow-lg rotate-lg-6"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PalaisSnackOffer;
