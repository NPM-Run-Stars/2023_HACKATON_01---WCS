import React from "react";
import { Link } from "react-router-dom";
import ActifW from "../assets/icone-montagne-white.png";
import SauvageW from "../assets/icone-sauvage-white.png";
import ChillW from "../assets/icone-soleil-white.png";
import CulturelW from "../assets/icone-culture-white.png";
import ChillOut from "../assets/Picture-2-plage_1920.png";
import backgroundtravel from "../assets/bg-cards.png";

function Chill() {
  return (
    <div
      className="dest-container"
      style={{ backgroundImage: `url(${backgroundtravel})` }}
    >
      <div className="clip-container">
        <p>Vous êtes plutôt</p>
        <h1 className="clip-text-chill">Chill</h1>
        <p className="text-line3">Dis nous plus...</p>
      </div>
      <div className="header-filtres">
        <img className="main-picture" src={ChillOut} alt="plage" width="100%" />
      </div>
      <div className="destinations-all">
        <h2 className="title-destination-chill filtre-title">
          <span>Type</span>
          <br /> de destination
        </h2>
        <div className="Mood">
          {/* Montagne */}
          <div className="card_underbox-chilli">
            <div className="Actif card_box-chilli">
              <div className="checkbox-dest">
                <input type="checkbox" id="checkbox" name="scales" />
              </div>
              <div className="Icon">
                <img
                  className="picto-voyager"
                  src={ActifW}
                  alt="city"
                  width="100%"
                />
              </div>
              <div className="contenu">
                <h3 className="voyager">Montagne</h3>
              </div>
            </div>
          </div>

          {/* Ville */}
          <div className="card_underbox-chilli">
            <div className="Festif card_box-chilli">
              <div className="checkbox-dest">
                <input type="checkbox" id="checkbox" name="scales" />
              </div>
              <div className="Icon">
                <img
                  className="picto-voyager"
                  src={CulturelW}
                  alt="city"
                  width="100%"
                />
              </div>
              <div className="contenu">
                <h3 className="voyager">Ville</h3>
              </div>
            </div>
          </div>

          {/* Sauvage */}
          <div className="card_underbox-chilli">
            <div className="Culturel card_box-chilli">
              <div className="checkbox-dest">
                <input type="checkbox" id="checkbox" name="scales" />
              </div>
              <div className="Icon">
                <img
                  className="picto-voyager"
                  src={SauvageW}
                  alt="city"
                  width="100%"
                />
              </div>
              <div className="contenu">
                <h3 className="voyager">Sauvage</h3>
              </div>
            </div>
          </div>
          {/* Plage */}
          <div className="card_underbox-chilli">
            <div className="Chill card_box-chilli">
              <div className="checkbox-dest">
                <input type="checkbox" id="checkbox" name="scales" />
              </div>
              <div className="Icon">
                <img
                  className="picto-voyager"
                  src={ChillW}
                  alt="city"
                  width="100%"
                />
              </div>
              <div className="contenu">
                <h3 className="voyager">Plage</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/deck">
        <button type="button" className="btn-friends btnchill">
          Trouve-moi des compagnons
        </button>
      </Link>
    </div>
  );
}

export default Chill;
