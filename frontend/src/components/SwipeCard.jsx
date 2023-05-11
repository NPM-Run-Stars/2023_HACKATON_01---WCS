import React from "react";

function SwipeCard({ userprofile, index }) {
  return (
    <div className="card-container" style={{ zIndex: -index + 1 }}>
      <img src={userprofile.image_pr} alt={userprofile.nom} />
      <h2>
        {userprofile.prenom} {userprofile.nom}
      </h2>
      <p>{userprofile.age}</p>
      <p>{userprofile.dob}</p>
      <p>{userprofile.email}</p>
      <p>{userprofile.genre}</p>
      <p>{userprofile.phone}</p>
    </div>
  );
}

export default SwipeCard;
