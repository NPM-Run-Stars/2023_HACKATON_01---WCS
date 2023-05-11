import React, { useState, useEffect } from "react";
import "../Deck.scss";
import NavBar from "@components/Navbar";
import SwipeCard from "../components/SwipeCard";

function Deck() {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`)
      .then((result) => result.json())
      .then((profiles) => {
        setUserProfiles(profiles);
      });
  }, []);

  return (
    <div>
      {userProfiles.map((userProfile, i) => (
        <SwipeCard key={userProfile.id} userProfile={userProfile} i={i} />
      ))}
      <NavBar />
    </div>
  );
}

export default Deck;
