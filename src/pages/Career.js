import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Career = () => {
  const [show, setShow] = useState(false);
  const [apply, setApply] = useState(false);

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

      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white ">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            Cassier
          </h5>
          <p class="text-gray-700 text-base mb-4">
            We are looking for a cashier who is friendly, enthusiastic, and
            outgoing. You'll be working with the public at a restaurant, so we
            need someone who is comfortable interacting with people in a
            fast-paced environment.
          </p>
          <button
            type="button"
            className={`inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out 
            ${show ? "hidden" : ""}`}
            onClick={() => setShow(!show)}
          >
            See more
          </button>
          {show && (
            <div>
              <div>
                <div>The Cashier will be responsible for:</div>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Making sure all cash transactions are completed correctly
                  and promptly.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Accepting payment from customers using a credit card or
                  debit card, or making change if necessary.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Redeem stamps, offers and coupons
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Maintaining an orderly work area by keeping it clean and
                  organized at all times.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - You should be able to multi-task by taking orders from
                  customers and ringing them up at the register.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Providing excellent customer service by greeting customers
                  politely, offering assistance when needed, and thanking them
                  when they leave the restaurant satisfied with their visit (or
                  not).
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - You should have knowledge working on ordering system.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - You should be able to memorize the food menu, including the
                  ingredient in one months period.
                </p>
              </div>
              <div>
                <div>The Cashier qualification:</div>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Basic PC knowledge.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - 2 experience working as a cashier.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Familiarity with electronic equipment, like cash register
                  and POS
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Good math skills.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Strong communication and time management skills.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - Customer satisfaction-oriented.
                </p>
                <p className="text-gray-700 text-base mb-1 pl-4">
                  - bachelor degree or equivalent in business management,
                  accounting, or marketing.
                </p>
              </div>
              <button
                type="button"
                className={`inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out 
            ${apply ? "hidden" : ""}`}
                onClick={() => setApply(!apply)}
              >
                See more
              </button>
              {apply && (
                <div>
                  <div>apply form</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
