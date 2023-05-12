import React from "react";

function SwipeButtons({ handleClick, handleUndo }) {
  return (
    <div>
      <button type="button" onClick={() => handleClick("left")}>
        Swipe Gauche
      </button>
      <button type="button" onClick={handleUndo}>
        Annuler
      </button>
      <button type="button" onClick={() => handleClick("right")}>
        Swipe Droite
      </button>
    </div>
  );
}

export default SwipeButtons;
