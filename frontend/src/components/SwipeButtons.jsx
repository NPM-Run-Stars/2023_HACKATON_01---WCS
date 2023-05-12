import React from "react";

function SwipeButtons({ handleClick }) {
  return (
    <div>
      <button type="button" onClick={() => handleClick("left")}>
        Swipe Gauche
      </button>
      <button type="button" onClick={() => handleClick("right")}>
        Swipe Droite
      </button>
    </div>
  );
}

export default SwipeButtons;
