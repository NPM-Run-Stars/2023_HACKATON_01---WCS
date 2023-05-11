import React, { useState, useEffect } from "react";
import "../Deck.scss";
import SwipeCard from "../components/SwipeCard";

function Deck() {
  const [Userprofiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`)
      .then((result) => result.json())
      .then((profiles) => {
        setUserProfiles(profiles);
      });
  }, []);

  return (
    <div>
      {Userprofiles.map((Userprofile, i) => (
        <SwipeCard userprofile={Userprofile} i={i} />
      ))}
    </div>
  );
}

export default Deck;
