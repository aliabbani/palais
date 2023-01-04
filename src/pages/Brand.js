import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Brand.css";

const Brand = () => {
  const [story, setStory] = useState(true);

  return (
    <div>
      <NavBar />
      <div className="brand-main bg-slate-300">
        <div className="flex flex-col md:flex-row justify-between pb-10 px-4 pt-6">
          <div className="brand uppercase text-2xl md:text-4xl">brand</div>
          <div className="flex md:justify-between font-semibold pt-4">
            <div
              className={`pr-6 cursor-pointer uppercase ${
                story ? "text-red-600" : "text-black"
              }`}
              onClick={() => setStory(true)}
            >
              our story
            </div>
            <div
              className={`cursor-pointer uppercase ${
                !story ? "text-red-600" : "text-black"
              }`}
              onClick={() => setStory(false)}
            >
              our history
            </div>
          </div>
        </div>
        {story ? (
          <div className="px-4 md:px-40 text-base md:text-xl">
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
          </div>
        ) : (
          <div className="px-4 md:px-40 text-base md:text-xl">
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
            <p className="pb-5 text-red-600">
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
