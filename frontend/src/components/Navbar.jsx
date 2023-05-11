import React from "react";
import { Link } from "react-router-dom";
import match from "../assets/icones-match.png"; 
import chat from "../assets/icones-navbar-chat.png"; 
import destination from "../assets/icones-navbar-destination.png"; 
import logo from "../assets/icones-navbar-logo.png"; 
import profil from "../assets/icones-navbar-profil.png"; 


function NavBar() {
  return (
    <>
      <div className="navbar-container"></div>
      <img src={profil} alt="profil"></img>
      <Link to="/voyages">Voyages</Link>
    </>
  );
}

export default NavBar;
