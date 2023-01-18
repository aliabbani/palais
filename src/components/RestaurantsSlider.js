import React from "react";

const RestaurantsSlider = (props) => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full md:h-[550px]">
          <img
            src={props.src1}
            className="block w-full md:h-[550px]"
            alt="Wild Landscape"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={props.src2}
            alt="Camera"
            className="block w-full md:h-[550px]"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={props.src3}
            className="block w-full md:h-[550px]"
            alt="Exotic Fruits"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantsSlider;
