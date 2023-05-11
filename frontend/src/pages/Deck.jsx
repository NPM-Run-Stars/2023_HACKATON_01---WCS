import React, { useState, useEffect } from "react";
import SwipeCard from "../components/SwipeCard";  

function Deck() {
  const [Userprofiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`)
      .then((result) => result.json())
      .then((profiles) => {
        console.log(profiles)
        setUserProfiles(profiles);
      });
  }, []);

  return (
    <>
    <div>
      {Userprofiles.map((Userprofile) => (
      <SwipeCard userprofile={Userprofile} />
      ))}
      </div>
    </>
  );
}

export default Deck;
