import React, { useState, useEffect } from "react";
import "../Deck.scss";
import SwipeCard from "../components/SwipeCard";
import Navbar from "../components/Navbar";
import SwipeButtons from "../components/SwipeButtons";

function Deck() {
  const [Userprofiles, setUserProfiles] = useState([]);
  const [UserPasser, setUserPasser] = useState([]);
  const [UserLiked, setUserLiked] = useState([]);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

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

          if (direction === "right") {
            setUserLiked((prevUserLiked) => [
              ...prevUserLiked,
              removedUserProfile,
            ]);
          } else {
            setUserPasser((prevUserPasser) => [
              ...prevUserPasser,
              removedUserProfile,
            ]);
          }

          setAnimationDirection(null);
          setIsAnimating(false);
        }
      }, 500);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      if (touchEndX - touchStartX > 150) {
        handleClick("right");
      } else if (touchStartX - touchEndX > 150) {
        handleClick("left");
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  console.info(UserPasser);
  console.info(UserLiked);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {Userprofiles.map((Userprofile, i) => (
        <SwipeCard
          key={Userprofile.id}
          userprofile={Userprofile}
          i={i}
          animationDirection={i === 0 ? animationDirection : null}
        />
      ))}
      <SwipeButtons handleClick={handleClick} />
      <Navbar />
    </div>
  );
}

export default Deck;
