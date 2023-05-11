import React, { useState, useEffect } from "react";

function Test() {
  const [Userprofiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`)
      .then((result) => result.json())
      .then((profiles) => {
        setUserProfiles(profiles);
      });
  }, []);

  return (
    <>
      <div>Test</div>
      {Userprofiles.map((Userprofile) => (
        <p>{Userprofile.nom}</p>
      ))}
    </>
  );
}

export default Test;
