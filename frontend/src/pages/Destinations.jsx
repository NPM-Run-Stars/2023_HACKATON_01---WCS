import React from "react";
import { Link } from "react-router-dom";
import ActifW from "../assets/icone-montagne-white.png";
import SauvageW from "../assets/icone-sauvage-white.png";
import ChillW from "../assets/icone-soleil-white.png";
import CulturelW from "../assets/icone-culture-white.png";
import Concert from "../assets/Picture-1-festival_1920.png";
import backgroundtravel from "../assets/bg-cards.png";

function Destinations() {
  return (
    <div
      className="dest-container"
      style={{ backgroundImage: `url(${backgroundtravel})` }}
    >
      <div className="clip-container">
        <p>vous êtes plutôt</p>
        <h1 className="clip-text">festif</h1>
        <p className="text-line3">Dis nous plus...</p>
      </div>
      <div className="header-filtres">
        <img className="main-picture" src={Concert} alt="city" width="100%" />
      </div>
      <div className="destinations-all">
        <h2 className="title-destination">
          <span>Type</span>
          <br /> de destination
        </h2>
        <div className="Mood">
          {/* Montagne */}
          <Link to="/">
            <div className="card_underbox">
              <div className="Actif card_box">
                <div className="checkbox-dest">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="scales"
                    checked="checked"
                  />
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
                  <h3 className="voyager">Montage</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Ville */}
          <Link to="/">
            <div className="card_underbox">
              <div className="Festif card_box">
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
          </Link>

          {/* Sauvage */}
          <Link to="/">
            <div className="card_underbox">
              <div className="Culturel card_box">
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
          </Link>
          {/* Plage */}
          <Link to="/">
            <div className="card_underbox">
              <div className="Chill card_box">
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
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Destinations;
