import React from "react";
import Actif from "../assets/icone-montagne.png";
import Festif from "../assets/icone-festif.png";
import Chill from "../assets/icone-soleil.png";
import Culturel from "../assets/icone-culture.png";

function Description() {
  return (
    <div className="description-all">
      <div className="description">
        <h2>
          Des voyageurs avec votre rythme et vos centres d'intérêt n'attendent que vous pour
          partir!
        </h2>
        <p>
          Qui n'a jamais voyagé avec ses amis à l'autre bout du monde sans pour
          autant prendre du plaisir ? Notre service vous propose de vous mettre
          en relation avec des vacanciers qui partagent la même vision des vacances que vous.
        </p>
      </div>
      <div className="Mood">
        <div className="Actif">
          <div className="Icon">
            <img
              className="picto-voyager"
              src={Actif}
              alt="city"
              width="100%"
            />
          </div>
          <div className="contenu">
            <h3 className="voyager">Je suis actif</h3>
            <p>
              Aventurier dans l'âme, j'aime bouger et m'amuser comme il se doit.
            </p>
          </div>
        </div>
        <div className="Festif">
          <div className="Icon">
            <img
              className="picto-voyager"
              src={Festif}
              alt="city"
              width="100%"
            />
          </div>
          <div className="contenu">
            <h3 className="voyager">Je suis festif</h3>
            <p>
              Si tu es celui qui pars en vacances pour faire la fête, alors
              rejoins-moi.
            </p>
          </div>
        </div>
        <div className="Culturel">
          <div className="Icon">
            <img
              className="picto-voyager"
              src={Culturel}
              alt="city"
              width="100%"
            />
          </div>
          <div className="contenu">
            <h3 className="voyager">Culturel</h3>
            <p>
              Musées, temples et autre formes d'architecture rythment tes vacances.
            </p>
          </div>
        </div>
        <div className="Chill">
          <div className="Icon">
            <img
              className="picto-voyager"
              src={Chill}
              alt="city"
              width="100%"
            />
          </div>
          <div className="contenu">
            <h3 className="voyager">Je suis chill</h3>
            <p>
              Si je pars en vacances c'est pour rester au bord de la piscine à me
              reposer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
