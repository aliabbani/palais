import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./Brand.css";

const Brand = () => {
  const [story, setStory] = useState(true);

  return (
    <div>
      <NavBar />

      <div className="brand-main">
        <div className="flex flex-col md:flex-row justify-between pb-10">
          <div className="brand uppercase text-2xl md:text-4xl">brand</div>
          <div className="flex md:justify-between font-semibold pt-4">
            <div
              className="pr-6 cursor-pointer uppercase"
              onClick={() => setStory(!story)}
            >
              <div>our story</div>
            </div>
            <div
              className="cursor-pointer uppercase"
              onClick={() => setStory(!story)}
            >
              our history
            </div>
          </div>
        </div>
        {story ? (
          <div>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ) : (
          <div>
            <p className="px-28 pb-5">
              1985 Ali, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum posuere nulla, elementum ornare tellus dapibus eu. Nulla
              facilisi. Mauris at congue lacus, quis rutrum nulla.
            </p>
            <p className="px-28 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
