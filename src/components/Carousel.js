import React, { useState } from "react";
import Card from "./Card";
import { initalState } from "./data";

function Carousel() {
  const [cards, setCards] = useState(initalState);

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];
    // find first current active card - so we could make it inactive
    const firstCurrentActiveCardIdx = prevState // get the idx of the one with the highest number of pos from active cards
      .filter((ft) => ft.active === true) // get only the active cards
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx; // basically getting the idx of the one with the highest pos
    // find next inactive card - so we could make it active
    var nextInactiveCardIdx;
    if (
      prevState.filter((ft) => ft.active === true)[2].idx !== prevState.length
    )
      nextInactiveCardIdx =
        prevState.filter((ft) => ft.active === true)[2].idx + 1;
    else
      nextInactiveCardIdx = prevState.filter((ft) => ft.active === false)[0]
        .idx;
    // update
    prevState.find((f) => f.idx === firstCurrentActiveCardIdx).active = false;
    prevState.find((f) => f.idx === nextInactiveCardIdx).active = true;
    // maximize pos
    prevState.find((f) => f.idx === firstCurrentActiveCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find last current active card - so we could make it inactive
    const lastCurrentActiveCardIdx = prevState // get the idx of the one with the highest number of pos from active cards
      .filter((ft) => ft.active === true) // get only the active cards
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[2].idx; // basically getting the idx of the one with the highest pos
    // find next inactive card - so we could make it active
    var previousInactiveCardIdx;
    if (prevState.filter((ft) => ft.active === false)[0].idx !== 1)
      previousInactiveCardIdx = prevState.filter((ft) => ft.active === false)[2]
        .idx;
    else
      previousInactiveCardIdx =
        prevState.filter((ft) => ft.active === true)[0].idx - 1;
    // // update
    prevState.find((f) => f.idx === lastCurrentActiveCardIdx).active = false;
    prevState.find((f) => f.idx === previousInactiveCardIdx).active = true;
    // maximize pos
    prevState.find((f) => f.idx === previousInactiveCardIdx).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;

    // update state
    setCards(prevState);
  };

  return (
    <>
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleRightClick()}
      >
        {"<"}
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card key={index} prop={card.text} />
        ))}
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleLeftClick()}
      >
        {">"}
      </div>
    </>
  );
}

export default Carousel;
