import React from "react";
import TinderCard from "react-tinder-card";

function SwipeCard({ userprofile, i }) {
  return (
    <TinderCard>
      <div className="card-container">
        <div className="profile-container" style={{ zIndex: -i + 1 }}>
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
      </div>
    </TinderCard>
  );
}

export default SwipeCard;
