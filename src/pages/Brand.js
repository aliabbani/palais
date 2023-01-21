import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import "../index.css";

const Brand = () => {
  const [story, setStory] = useState(true);

  return (
    <div className="flex flex-col content-around justify-between ">
      <NavBar />
      <div className="brand-main bg-slate-300">
        <div className="flex flex-col md:flex-row justify-between pb-10 px-4 pt-6">
          <div className="uppercase text-2xl md:text-4xl font-semibold leading-tight text-gray-800">
            brand
          </div>
          <div className="flex md:justify-between font-semibold pt-4">
            <div
              className={`pr-6 cursor-pointer uppercase ${
                story ? "text-red-600" : "text-gray-800"
              }`}
              onClick={() => setStory(true)}
            >
              our story
            </div>
            <div
              className={`cursor-pointer uppercase ${
                !story ? "text-red-600" : "text-gray-800"
              }`}
              onClick={() => setStory(false)}
            >
              our history
            </div>
          </div>
        </div>
        {story ? (
          <div className="px-4 md:px-40 text-base md:text-xl font-medium pb-14">
            <p className="pb-5">
              aLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5 text-red-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Ali Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas dictum posuere nulla, elementum ornare tellus dapibus eu.
              Nulla facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Another Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas dictum posuere nulla, elementum ornare tellus dapibus eu.
              Nulla facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Final Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas dictum posuere nulla, elementum ornare tellus dapibus eu.
              Nulla facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
          </div>
        ) : (
          <div className="px-4 md:px-40 text-base md:text-xl font-medium pb-14">
            <p className="pb-5 text-red-600">
              1985 Ali, elementum ornare tellus dapibus eu. Nulla facilisi.
              Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="pb-20 text-red-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Brand;
