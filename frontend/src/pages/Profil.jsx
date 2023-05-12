import React from "react";
import Random from "../assets/RandomProfile.jpg";
import Navbar from "../components/Navbar";

function Profil() {
  return (
    <div className="profil-container">
      <h1 className="head-container">Mon profil</h1>
      <div className="info-container">
        <img src={Random} alt="Ma photo" width="100px" height="100px" />
        <p>Bob</p>
        <p>Smith</p>
        <p>30 ans</p>
        <p>bob.smith@mail.com</p>
        <p>06 06 06 06 06</p>
      </div>
      <div className="like-container">
        <h3>Mon profil :</h3>
          <div className="checkbox-container">
          <label>
            <input type="checkbox" />
            Je suis actif
          </label>
          <label>
            <input type="checkbox" />
            J'aime Chiller
          </label>
          <label>
            <input type="checkbox" />
            Je suis festif
          </label>
          <label>
            <input type="checkbox" />
            J'aime la culture
          </label>
          </div>
      </div>
      <div className="like-container">
        <h3>Mes destinations de rêve :</h3>
        <div className="checkbox-container">
        <label>
          <input type="checkbox" />
          Montagne
        </label>
        <label>
          <input type="checkbox" />
         Ville
        </label>
        <label>
          <input type="checkbox" />
          Plage
        </label>
        <label>
          <input type="checkbox" />
          Sauvage
        </label>
        </div>
      </div>
      <div className="apropos-container">
        <h3>Un peu plus sur moi :</h3>
        <p>
          J'aime l'aventure, que ce soit à la plage ou à la montagne je suis à
          la recherche de sensations fortes. Si vous aimez l'action et vous
          réveiller pour regarder le lever de soleil je suis peut-être votre
          prochain compagnon de voyage?
        </p>
      </div>
      <Navbar />
    </div>
  );
}

export default Profil;
