import React, { useState, useEffect } from "react";
import "../Deck.scss";
import SwipeCard from "../components/SwipeCard";

function Deck() {
  const [Userprofiles, setUserProfiles] = useState([]);
  const [UserPasser, setUserPasser] = useState([]);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`)
      .then((result) => result.json())
      .then((profiles) => {
        setUserProfiles(profiles);
      });
  }, []);

  const handleClick = (direction) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setAnimationDirection(direction);
      setTimeout(() => {
        if (Userprofiles.length > 0) {
          const updatedUserProfiles = [...Userprofiles];
          const removedUserProfile = updatedUserProfiles.shift();

          setUserProfiles(updatedUserProfiles);
          setUserPasser((prevUserPasser) => [
            ...prevUserPasser,
            removedUserProfile,
          ]);
          setAnimationDirection(null);
          setIsAnimating(false);
        }
      }, 500);
    }
  };

  console.info(UserPasser);

  return (
    <div>
      {Userprofiles.map((Userprofile, i) => (
        <SwipeCard
          key={Userprofile.id}
          userprofile={Userprofile}
          i={i}
          animationDirection={i === 0 ? animationDirection : null}
        />
      ))}
      <button type="button" onClick={() => handleClick("left")}>
        Swipe Gauche
      </button>
      <button type="button" onClick={() => handleClick("right")}>
        Swipe Droite
      </button>
    </div>
  );
}

export default Deck;
