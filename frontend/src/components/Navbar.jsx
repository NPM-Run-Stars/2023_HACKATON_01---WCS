import React from "react";
import { Link } from "react-router-dom";
import match from "../assets/icones-match.png";
import chat from "../assets/icones-navbar-chat.png";
import destination from "../assets/icones-navbar-destination.png";
import logo from "../assets/icones-navbar-logo.png";
import profil from "../assets/icones-navbar-profil.png";

function NavBar() {
  return (
    <div className="navbar-container">
      <img src={profil} alt="profil" width="50px" height="50px" />
      <img src={chat} alt="chat" width="50px" height="50px" />
      <img src={logo} alt="Logo" width="50px" height="50px" />
      <img src={match} alt="Match" width="50px" height="50px" />
      <Link to="/musique">
        <img
          src={destination}
          alt="Destinations vacances"
          width="50px"
          height="50px"
        />
      </Link>
    </div>
  );
}

export default NavBar;
