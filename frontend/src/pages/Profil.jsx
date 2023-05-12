import React from "react";
import Random from "../assets/RandomProfile.jpg";
import Navbar from "../components/Navbar";
import "../Profil.scss";

function Profil() {
  return (
    <div className="carte">
      <div className="mise-en-page">
        <div className="en-tete">
          <img src={Random} alt="Profile" width="100px" height="100px" />
        </div>
        <h1>A propos</h1>
        <p>Nom</p>
        <p>Prénom</p>
        <p>Age</p>
        <p>adresse mail</p>
        <p>téléphone</p>
      </div>
      <Navbar />
    </div>
  );
}

export default Profil;
