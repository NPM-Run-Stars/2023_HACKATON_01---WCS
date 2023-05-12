import React from "react";
import { Link } from "react-router-dom";

import match from "../assets/icones-match.png";
import chat from "../assets/icones-navbar-chat.png";
import musique from "../assets/icones-musique.png";
import profil from "../assets/icones-navbar-profil.png";

function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/deck">
        <img src={match} alt="Match" width="50px" height="50px" />
      </Link>

      <Link to="/chat">
        <img src={chat} alt="chat" width="50px" height="50px" />
      </Link>

      <Link to="/profile">
        <img src={profil} alt="profil" width="50px" height="50px" />
      </Link>

      <Link to="/musique">
        <img
          src={musique}
          alt="Destinations vacances"
          width="50px"
          height="50px"
        />
      </Link>
    </div>
  );
}

export default NavBar;
