import React from "react";
import { Link } from "react-router-dom";
import Plage from "../assets/Picture-2-plage_1920.png";
import Montagne from "../assets/Picture-4-montagne_1920.png";
import Concert from "../assets/Picture-1-festival_1920.png";
import City from "../assets/Picture-3-culture_1920.png";
import Logo from "../assets/Logo-adopter.png";

import Description from "../components/Description";

export default function Home() {
  return (
    <header className="Header">
      <div className="main-title">
        <h1>Trouvez votre compagnon de voyage</h1>
        <h3 className="second-title">Quel type de voyageur es-tu?</h3>
        <div className="logo">
          <img className="logo" src={Logo} alt="city" width="200px" />
        </div>
      </div>
      <div className="pictures-container">
        <div className="row-picture">
          <div className="picture1">
            <img className="main-picture"
              src={Montagne}
              alt="city"
              width="100%" />
            <div className="btn button-container-1">
              <Link to="/actif" className="picture-button">
                Je suis actif
              </Link>
            </div>
          </div>
          <div className="picture2">
            <img className="main-picture" src={Plage} alt="city" width="100%" />
            <div className="btn button-container-2">
              <Link to="/festif" className="picture-button">
                J’aime chill
              </Link>
            </div>
          </div>
        </div>
        <div className="row-picture">
          <div className="picture3">
            <img
              className="main-picture"
              src={Concert}
              alt="city"
              width="100%"
            />
            <div className="btn button-container-3">
              <Link to="/festif" className="picture-button">
                Je suis festif
              </Link>
            </div>
          </div>
          <div className="picture4">
            <img className="main-picture" src={City} alt="city" width="100%" />
            <div className="btn button-container-4">
              <Link to="/culture" className="picture-button">
                J’aime la culture
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Description />
      </div>
    </header>
  );
}
