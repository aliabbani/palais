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
        <form action="https://formspree.io/f/mknanvrb" method="POST">
          <div className="text-xl md:text-2xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
            feedback details
          </div>
          <label>
            <textarea
              name="message"
              placeholder="*Please provide more details about your feedback"
              className="h-28 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
              required
            ></textarea>
          </label>
          <div className="text-xl md:text-2xl font-black capitalize pt-6 pb-6 md:pt-20 pb-10">
            your info
          </div>
          <div className="pb-6">
            <input
              className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
              type="text"
              name="first name"
              placeholder="*First Name"
              required
            />
          </div>
          <div className="pb-6">
            <input
              className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
              type="text"
              name="last name"
              placeholder="*Last Name"
              required
            />
          </div>
          <div className="pb-6">
            <input
              className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
              type="email"
              name="email"
              placeholder="*Personal Email"
              required
            />
          </div>
          <div className="pb-6">
            <input
              className="h-10 border-b-[1px] border-gray-300 w-full text-normal font-semibold py-2 px-3 text-gray-700 placeholder-gray-400 !outline-none !ring-0"
              placeholder="*Phone Number"
              bordered="false"
              type="tel"
              name="phone number"
              pattern="[0-9]{9}"
              required
            />
          </div>
          <div>
            By selecting Submit, any information you provide will be protected.
            We may contact you regarding your submission.
          </div>
          <div className="py-20">
            <button
              type="submit"
              className="bg-black rounded-md border-none py-3 px-8 text-center no-underline text-base text-[#292929] outline-none w-auto min-w-117"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
