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
        <p>
          {" "}
          {userprofile.critère_1} - {userprofile.critère_2} -{" "}
          {userprofile.critère_3}{" "}
        </p>
      </div>
    </div>
  );
}

export default SwipeCard;
