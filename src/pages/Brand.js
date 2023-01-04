import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./Brand.css";

const Brand = () => {
  const [story, setStory] = useState(false);

  return (
    <div>
      <NavBar />

      <div className="brand-main">
        <div className="flex flex-col md:flex-row justify-between pb-10">
          <div className="brand uppercase">brand</div>
          <div className="flex md:justify-between">
            <div
              className="pr-6 cursor-pointer "
              onClick={() => setStory(!story)}
            >
              our story
            </div>
            <div className="cursor-pointer" onClick={() => setStory(!story)}>
              our history
            </div>
          </div>
        </div>
        {story ? (
          <p className="text-center px-40">
            brand pageeeeeeeeeeeeeeeeeeeeeeeeeeeeeee loren ipsum dolor sit amet
            loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor
            sit amet loren ipsumloren ipsum dolor sit amet loren ipsumloren
            ipsum dolor sit amet loren ipsumloren ipsum dolor sit amet loren
            ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor sit
            amet loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum
            dolor sit amet loren ipsumloren ipsum dolor sit amet loren
            ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor sit
            amet loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum
            dolor sit amet loren ipsumloren ipsum dolor sit amet loren
            ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor sit
            amet loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum
            dolor sit amet loren ipsumloren ipsum dolor sit amet loren
            ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor sit
            amet loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum
            dolor sit amet loren ipsumloren ipsum dolor sit amet loren
            ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor sit
            amet loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum
            dolor sit amet loren ipsumloren ipsum dolor sit amet loren
            ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor sit
            amet loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum
            dolor sit amet loren ipsumloren ipsum dolor sit amet loren
            ipsumloren ipsum dolor sit amet loren ipsumloren ipsum dolor sit
            amet loren ipsumloren ipsum dolor sit amet loren ipsumloren ipsum
            dolor sit amet loren ipsum
          </p>
        ) : (
          <p className="text-center px-40">second</p>
        )}
      </div>
    </div>
  );
};

export default Brand;
