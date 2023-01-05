import React from "react";
import NavBar from "../components/NavBar";
import "./Loyality.css";

const Loyality = () => {
  return (
    <div>
      <NavBar />
      <div className="main flex flex-col justify-around">
        <div>
          <h1 className="fidelity uppercase">carte de fidélité</h1>
        </div>
        <div className="place uppercase ">vous garder une place</div>
        <div class="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <button className="border border-red-600 w-28 h-16 text-red-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Loyality;
