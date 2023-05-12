import React, { useState, useEffect } from "react";
import "../Deck.scss";
import SwipeCard from "../components/SwipeCard";
import Navbar from "../components/Navbar";
import SwipeButtons from "../components/SwipeButtons";

function Deck() {
  const [Userprofiles, setUserProfiles] = useState([]);
  const [UserPasser, setUserPasser] = useState([]);
  const [UserLiked, setUserLiked] = useState([]);
  const [swipeHistory, setSwipeHistory] = useState([]);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [canUndo, setCanUndo] = useState(true);

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
          setSwipeHistory((prevSwipeHistory) => [
            ...prevSwipeHistory,
            removedUserProfile,
          ]);

          if (direction === "right") {
            setUserLiked((prevUserLiked) => [
              ...prevUserLiked,
              removedUserProfile,
            ]);
          } else if (direction === "left") {
            setUserPasser((prevUserPasser) => [
              ...prevUserPasser,
              removedUserProfile,
            ]);
          }

          setCanUndo(true);
          setAnimationDirection(null);
          setIsAnimating(false);
        }
      }, 500);
    }
  };

  const handleUndo = () => {
    if (canUndo && swipeHistory.length > 0) {
      const updatedSwipeHistory = [...swipeHistory];
      const removedUserProfile = updatedSwipeHistory.pop();

      setSwipeHistory(updatedSwipeHistory);
      setUserProfiles((prevUserProfiles) => [
        removedUserProfile,
        ...prevUserProfiles,
      ]);

      if (UserLiked.includes(removedUserProfile)) {
        setUserLiked((prevUserLiked) =>
          prevUserLiked.filter((profile) => profile !== removedUserProfile)
        );
      } else if (UserPasser.includes(removedUserProfile)) {
        setUserPasser((prevUserPasser) =>
          prevUserPasser.filter((profile) => profile !== removedUserProfile)
        );
      }

      setCanUndo(false);
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
      <SwipeButtons handleClick={handleClick} handleUndo={handleUndo} />
      <Navbar />
    </div>
  );
}

export default Deck;
