import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div className="">
      <NavBar />
      <div className="px-2 md:px-72">
        <div className="text-2xl md:text-6xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
          contact us
        </div>
        <div>
          Have a question or feedback about a delivery order? please contact us
          at: 0996-555-555 or at: 0996-333-333.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
