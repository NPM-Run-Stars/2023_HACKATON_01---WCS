import React from 'react'

const SwipeCard = ({userprofile}) => {
  return (
    <>
    <img src={userprofile.image_pr} alt={userprofile.nom}></img>
    <h2>{userprofile.prenom} {userprofile.nom}</h2>
    <p>{userprofile.age}</p>
    <p>{userprofile.dob}</p>
    <p>{userprofile.email}</p>
    <p>{userprofile.genre}</p>
    <p>{userprofile.phone}</p>
    </>
  )
}

export default SwipeCard

