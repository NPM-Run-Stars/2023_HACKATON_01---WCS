import React from "react";

function SwipeCard({ userprofile, i, animationDirection }) {
  return (
    <div
      className={`card-container ${animationDirection}`}
      style={{ zIndex: i * -1 }}
    >
      <div className="profile-container">
        <img src={userprofile.image_pr} alt={userprofile.nom} />
        <h2>
          {userprofile.prenom} {userprofile.nom}
        </h2>
        <h3>{userprofile.age} ans</h3>
        <ul>
          <li>{userprofile.critère_1}</li>
          <li>{userprofile.critère_2}</li>
          <li>{userprofile.critère_3}</li>
        </ul>
      </div>
    </div>
  );
}

export default SwipeCard;
