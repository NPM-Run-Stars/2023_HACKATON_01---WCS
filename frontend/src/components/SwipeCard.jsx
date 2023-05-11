import React from "react";
import TinderCard from "react-tinder-card";

function SwipeCard({ userProfile, i }) {
  return (
    <TinderCard>
      <div className="card-container">
        <div className="profile-container" style={{ zIndex: -i + 1 }}>
          <img src={userProfile.image_pr} alt={userProfile.nom} />
          <div className="profile-descript">
            <h2>
              {userProfile.prenom} {userProfile.nom}
            </h2>
            <p>{userProfile.age}</p>
            <p>{userProfile.dob}</p>
            <p>{userProfile.email}</p>
            <p>{userProfile.genre}</p>
            <p>{userProfile.phone}</p>
          </div>
        </div>
      </div>
    </TinderCard>
  );
}

export default SwipeCard;
