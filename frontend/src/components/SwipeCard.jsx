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
        <p>{userprofile.age}</p>
        <p>{userprofile.genre}</p>
      </div>
    </div>
  );
}

export default SwipeCard;
